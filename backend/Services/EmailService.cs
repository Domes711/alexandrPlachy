using backend.Models;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;
using Mjml.Net;

namespace backend.Services;

public class EmailService : IEmailService
{
    private readonly EmailSettings _emailSettings;
    private readonly IWebHostEnvironment _environment;
    private readonly ILogger<EmailService> _logger;
    private readonly IMjmlRenderer _mjmlRenderer;

    public EmailService(
        IOptions<EmailSettings> emailSettings,
        IWebHostEnvironment environment,
        ILogger<EmailService> logger)
    {
        _emailSettings = emailSettings.Value;
        _environment = environment;
        _logger = logger;
        _mjmlRenderer = new MjmlRenderer();
    }

    public async Task SendContactEmailAsync(EmailRequest request)
    {
        try
        {
            // Load MJML template
            var templatePath = Path.Combine(_environment.ContentRootPath, "Templates", "ContactEmailTemplate.mjml");
            var mjmlTemplate = await File.ReadAllTextAsync(templatePath);

            // Replace placeholders
            var processedMjml = ReplacePlaceholders(mjmlTemplate, request);

            // Convert MJML to HTML
            var result = _mjmlRenderer.Render(processedMjml);

            if (result.Errors.Any())
            {
                _logger.LogError("MJML rendering errors: {Errors}", string.Join(", ", result.Errors.Select(e => e.ToString())));
                throw new InvalidOperationException("Failed to render email template");
            }

            var htmlContent = result.Html;

            // Create email message
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress(_emailSettings.SenderName, _emailSettings.SenderEmail));
            message.To.Add(new MailboxAddress("", _emailSettings.RecipientEmail));
            message.Subject = $"New Contact Request - {request.Service}";

            var bodyBuilder = new BodyBuilder
            {
                HtmlBody = htmlContent
            };

            message.Body = bodyBuilder.ToMessageBody();

            // Send email
            using var client = new SmtpClient();

            // Determine secure socket options based on port
            SecureSocketOptions secureSocketOptions;
            if (_emailSettings.SmtpPort == 465)
            {
                // Port 465 uses implicit SSL (SSL from the start)
                secureSocketOptions = SecureSocketOptions.SslOnConnect;
            }
            else if (_emailSettings.SmtpPort == 587)
            {
                // Port 587 uses STARTTLS (upgrade connection to SSL)
                secureSocketOptions = SecureSocketOptions.StartTls;
            }
            else if (!_emailSettings.UseSsl)
            {
                // No encryption (not recommended)
                secureSocketOptions = SecureSocketOptions.None;
            }
            else
            {
                // Default to STARTTLS for other ports with SSL enabled
                secureSocketOptions = SecureSocketOptions.StartTls;
            }

            _logger.LogInformation("Attempting to connect to SMTP server: {Server}:{Port} with {Security}",
                _emailSettings.SmtpServer, _emailSettings.SmtpPort, secureSocketOptions);

            await client.ConnectAsync(_emailSettings.SmtpServer, _emailSettings.SmtpPort, secureSocketOptions);

            _logger.LogInformation("Connected successfully. Attempting authentication with username: {Username}",
                _emailSettings.Username);

            if (!string.IsNullOrEmpty(_emailSettings.Username) && !string.IsNullOrEmpty(_emailSettings.Password))
            {
                await client.AuthenticateAsync("web@alexandrplachy.cz", "%~ToB)Lq![7TQ[Wz|&nZ");
                _logger.LogInformation("Authentication successful");
            }

            await client.SendAsync(message);
            _logger.LogInformation("Email sent successfully");

            await client.DisconnectAsync(true);

            _logger.LogInformation("Contact email sent successfully for service: {Service}, to: {Email}",
                request.Service, request.Email);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Failed to send contact email for service: {Service}", request.Service);
            throw;
        }
    }

    private string ReplacePlaceholders(string template, EmailRequest request)
    {
        var timestamp = DateTime.Now.ToString("dd.MM.yyyy HH:mm:ss");

        var result = template
            .Replace("{{FirstName}}", request.FirstName)
            .Replace("{{LastName}}", request.LastName)
            .Replace("{{Email}}", request.Email)
            .Replace("{{Phone}}", request.Phone)
            .Replace("{{Service}}", request.Service)
            .Replace("{{Timestamp}}", timestamp);

        // Handle conditional Note section
        if (!string.IsNullOrWhiteSpace(request.Note))
        {
            result = result
                .Replace("{{#if Note}}", "")
                .Replace("{{/if}}", "")
                .Replace("{{Note}}", request.Note);
        }
        else
        {
            // Remove the entire conditional section if no note
            var startTag = "{{#if Note}}";
            var endTag = "{{/if}}";
            var startIndex = result.IndexOf(startTag);
            var endIndex = result.IndexOf(endTag);

            if (startIndex >= 0 && endIndex >= 0)
            {
                result = result.Remove(startIndex, endIndex - startIndex + endTag.Length);
            }
        }

        return result;
    }
}
