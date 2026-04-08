import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

interface EstimateFormData {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  propertyType: string;
  squareFootage: string;
  timeline: string;
  description: string;
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
    const formData: EstimateFormData = await request.json();

    const requiredFields = ['fullName', 'email', 'phone', 'projectType', 'propertyType', 'timeline'];
    for (const field of requiredFields) {
      if (!formData[field as keyof EstimateFormData]) {
        return new Response(
          JSON.stringify({ error: `Missing required field: ${field}` }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
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
      subject: `Will Rayners Custom Painting estimate request: ${escapeHtml(formData.fullName)}`,
      html: `
        <h2>New Estimate Request</h2>
        <p><strong>Name:</strong> ${escapeHtml(formData.fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(formData.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(formData.phone)}</p>
        <p><strong>Project Type:</strong> ${escapeHtml(formData.projectType)}</p>
        <p><strong>Property Type:</strong> ${escapeHtml(formData.propertyType)}</p>
        <p><strong>Square Footage:</strong> ${escapeHtml(formData.squareFootage || 'Not provided')}</p>
        <p><strong>Timeline:</strong> ${escapeHtml(formData.timeline)}</p>
        <p><strong>Description:</strong> ${escapeHtml(formData.description || 'Not provided')}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    return new Response(
      JSON.stringify({ success: true, message: 'Estimate request submitted successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Form submission error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process form submission' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
