// import { EmailTemplate } from '@/components/email-template';
import { createNotificationEmail } from '@/utils/email/template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return Response.json({ error: 'RESEND_API_KEY is not set' });
  }

  if (!process.env.NOTIFICATION_EMAIL) {
    return Response.json({ error: 'NOTIFICATION_EMAIL is not set' });
  }

  const body = await request.json();

  const { data, error } = await resend.emails.send({
    from: 'notification@exacode.io',
    to: process.env.NOTIFICATION_EMAIL as string,
    subject: '(AdQuest.id) New Contact Notification',
    // react: EmailTemplate({ firstName: 'John' }),
    html: createNotificationEmail(body.name, body.email, body.message, body.publisher),
  });

  if (error) {
    return Response.json({ error });
  }

  return Response.json(data);
}
