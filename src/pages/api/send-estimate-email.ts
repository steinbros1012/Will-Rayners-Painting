import type { APIRoute } from 'astro';

interface EstimateFormData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
}

export const POST: APIRoute = async ({ request }) => {
  // Only accept POST requests
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const formData: EstimateFormData = await request.json();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.serviceType) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Log the submission
    console.log('Estimate form submission received:', {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      serviceType: formData.serviceType,
      timestamp: new Date().toISOString(),
    });

    // Note: Email sending functionality is not available in this environment
    // The form data has been validated and logged for processing

    return new Response(
      JSON.stringify({ success: true, message: 'Estimate request submitted successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error processing estimate form:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
