'use server';
import ConfirmationEmailTemplate from '@/components/emails/ContactRequestConfirmation';
import NotificationEmailTemplate from '@/components/emails/ContactRequestDetails';
import { render } from '@react-email/render';
import { Resend } from 'resend';

interface State {
  error: string | null;
  success: boolean;
}

export const sendEmail = async (prevState: State, formData: FormData) => {
  const honeypot = formData.get('honeypot') as string;

  if (honeypot) {
    return {
      error: 'You are not human!',
      success: false
    };
  }

  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const message = formData.get('message') as string;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'Website Automation <noreply@goudeketting.nl>',
      to: 'Robin Goudeketting <r.goudeketting@gmail.com>',
      subject: 'New Contact Request',
      html: render(NotificationEmailTemplate({ name, email, phone, message }))
    });
    await resend.emails.send({
      from: 'Robin Goudeketting <noreply@goudeketting.nl>',
      to: `${name} <${email}>`,
      subject: 'Request Received',
      html: render(ConfirmationEmailTemplate({ name, email, phone, message }))
    });
    return {
      error: null,
      success: true
    };
  } catch (error) {
    console.log(error);
    return {
      error: (error as Error).message,
      success: false
    };
  }
};
