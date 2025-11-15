using System.ComponentModel.DataAnnotations;

namespace backend.Models;

/// <summary>
/// Email request model for contact form submissions
/// </summary>
public class EmailRequest
{
    /// <summary>
    /// Customer's first name
    /// </summary>
    [Required(ErrorMessage = "First name is required")]
    public string FirstName { get; set; } = string.Empty;

    /// <summary>
    /// Customer's last name
    /// </summary>
    [Required(ErrorMessage = "Last name is required")]
    public string LastName { get; set; } = string.Empty;

    /// <summary>
    /// Customer's email address
    /// </summary>
    [Required(ErrorMessage = "Email is required")]
    [EmailAddress(ErrorMessage = "Invalid email address")]
    public string Email { get; set; } = string.Empty;

    /// <summary>
    /// Customer's phone number
    /// </summary>
    [Required(ErrorMessage = "Phone number is required")]
    [Phone(ErrorMessage = "Invalid phone number")]
    public string Phone { get; set; } = string.Empty;

    /// <summary>
    /// Service the customer is interested in
    /// </summary>
    [Required(ErrorMessage = "Service is required")]
    public string Service { get; set; } = string.Empty;

    /// <summary>
    /// Optional additional note or message from the customer
    /// </summary>
    public string? Note { get; set; }
}
