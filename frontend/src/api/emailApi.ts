// API configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://localhost:7133';

// Email request interface
export interface EmailRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  note?: string;
}

// Email response interface
export interface EmailResponse {
  message: string;
}

// Send contact email
export const sendContactEmail = async (
  data: EmailRequest
): Promise<EmailResponse> => {
  const response = await fetch(`${API_BASE_URL}/api/email/send`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.message || `Server error: ${response.status}`
    );
  }

  return response.json();
};
