using backend.Models;

namespace backend.Services;

public interface IEmailService
{
    Task SendContactEmailAsync(EmailRequest request);
}
