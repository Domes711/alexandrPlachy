import { useMutation } from '@tanstack/react-query';
import { sendContactEmail, type EmailRequest } from '../api/emailApi';

export const useEmailMutation = () => {
  return useMutation({
    mutationFn: (data: EmailRequest) => sendContactEmail(data),
    onError: (error: Error) => {
      console.error('Email sending failed:', error);
    },
  });
};
