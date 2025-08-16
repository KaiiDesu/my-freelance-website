import type { RequestHandler } from '@sveltejs/kit';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

const TO_ADDRESS = process.env.CONTACT_TO_ADDRESS || process.env.VITE_CONTACT_TO_ADDRESS || '';

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const POST: RequestHandler = async ({ request }) => {
  try {
    const data = await request.json();
    const name = (data.name || '').toString().trim();
    const email = (data.email || '').toString().trim();
    const message = (data.message || '').toString().trim();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
    }

    if (!isValidEmail(email) || !TO_ADDRESS) {
      return new Response(JSON.stringify({ error: 'Invalid email or target not configured' }), { status: 400 });
    }

    if (!process.env.SENDGRID_API_KEY) {
      console.error('SENDGRID_API_KEY not set');
      return new Response(JSON.stringify({ error: 'Email service not configured' }), { status: 500 });
    }

    const mail = {
      to: TO_ADDRESS,
      from: TO_ADDRESS,
      replyTo: email,
      subject: `Website contact from ${name} <${email}>`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message.replace(/\n/g, '<br/>')}</p>`
    } as any;

    await sgMail.send(mail);

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error('SendGrid error', err);
    return new Response(JSON.stringify({ error: 'Failed to send message' }), { status: 500 });
  }
};

export const prerender = false;
