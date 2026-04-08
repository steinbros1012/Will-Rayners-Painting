import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  serviceNeeded: string;
  projectDetails: string;
  preferredTimeline: string;
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export const POST: APIRoute = async ({ request }) => {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const formData: ContactFormData = await request.json();

    if (!formData.name || !formData.email || !formData.phone || !formData.address || !formData.serviceNeeded || !formData.projectDetails) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const transporter = nodemailer.createTransport({
      host: import.meta.env.SMTP_HOST,
      port: Number(import.meta.env.SMTP_PORT) || 587,
      secure: import.meta.env.SMTP_SECURE === 'true',
      auth: {
        user: import.meta.env.SMTP_USER,
        pass: import.meta.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: import.meta.env.SMTP_FROM_EMAIL,
      to: 'steinbros1012@gmail.com',
      cc: 'steinbros1012@gmail.com',
      replyTo: formData.email,
      subject: `Will Rayners Custom Painting contact form: ${escapeHtml(formData.name)}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(formData.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(formData.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(formData.phone)}</p>
        <p><strong>Address:</strong> ${escapeHtml(formData.address)}</p>
        <p><strong>Service Needed:</strong> ${escapeHtml(formData.serviceNeeded)}</p>
        <p><strong>Project Details:</strong> ${escapeHtml(formData.projectDetails)}</p>
        <p><strong>Preferred Timeline:</strong> ${escapeHtml(formData.preferredTimeline || 'Not provided')}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    return new Response(
      JSON.stringify({ success: true, message: 'Contact form submitted successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
