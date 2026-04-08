# Email Form Setup Guide

## Overview
The estimate form now uses a custom backend API to send emails. You need to configure SMTP (Simple Mail Transfer Protocol) environment variables to enable email functionality.

## Required Environment Variables

Add the following variables to your Wix Vibe environment configuration:

### 1. **SMTP_HOST**
- **Description:** The SMTP server address for sending emails
- **Example:** `smtp.gmail.com` or `smtp.office365.com`
- **Type:** String

### 2. **SMTP_PORT**
- **Description:** The SMTP server port
- **Common values:**
  - `587` (TLS - recommended)
  - `465` (SSL)
  - `25` (unencrypted - not recommended)
- **Type:** Number
- **Default:** `587`

### 3. **SMTP_SECURE**
- **Description:** Whether to use SSL/TLS encryption
- **Values:** `true` or `false`
- **Recommendation:** Use `true` for port 465, `false` for port 587
- **Type:** Boolean

### 4. **SMTP_USER**
- **Description:** Your email account username/address
- **Example:** `your-email@gmail.com`
- **Type:** String

### 5. **SMTP_PASSWORD**
- **Description:** Your email account password or app-specific password
- **Important:** Use an app-specific password, not your main password
- **Type:** String

### 6. **SMTP_FROM_EMAIL**
- **Description:** The "from" email address for outgoing emails
- **Example:** `noreply@yourdomain.com`
- **Type:** String

## Where to Add Environment Variables on Vercel

### Step 1: Open Project Settings
1. Go to your Vercel dashboard
2. Open the `Will-Rayners-Painting` project
3. Navigate to **Settings** → **Environment Variables**

### Step 2: Add Each Variable
Create new environment variables with the exact names listed above (case-sensitive).

### Step 3: Redeploy
After saving the variables, redeploy the project so the API routes can read the updated values.

## Email Provider Setup Examples

### Gmail Setup
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-specific-password
SMTP_FROM_EMAIL=your-email@gmail.com
```

**Note:** Gmail requires an "App Password" for security:
1. Enable 2-Factor Authentication on your Google Account
2. Go to https://myaccount.google.com/apppasswords
3. Generate an app password for "Mail" and "Windows Computer"
4. Use this password in SMTP_PASSWORD

### Microsoft 365/Outlook Setup
```
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@outlook.com
SMTP_PASSWORD=your-password
SMTP_FROM_EMAIL=your-email@outlook.com
```

### SendGrid Setup
```
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASSWORD=SG.your-sendgrid-api-key
SMTP_FROM_EMAIL=noreply@yourdomain.com
```

### Mailgun Setup
```
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=postmaster@mg.yourdomain.com
SMTP_PASSWORD=your-mailgun-password
SMTP_FROM_EMAIL=noreply@yourdomain.com
```

## Form Submission Flow

### What Happens When Someone Submits the Form:

1. **Frontend Validation**
   - All required fields are validated
   - Email format is checked
   - Error messages display if validation fails

2. **Backend Processing** (`/api/submit-estimate`)
   - Form data is received and validated again
   - An email is sent to:
     - **Business:** the `to` address configured in your API route

3. **Success Response**
   - User sees a success message
   - Form is cleared
   - Message auto-dismisses after 5 seconds

4. **Error Handling**
   - If email sending fails, user sees an error message
   - User can try again or call the phone number

## Email Templates

### Email to Business Owner
- Contains all customer information
- Includes project details
- Shows submission timestamp
- Allows direct reply to customer

## Testing Your Setup

1. Fill out the estimate form on your website
2. Submit with valid information
3. Check:
   - Does the destination inbox receive the email?
   - Are all form fields captured correctly?

## Troubleshooting

### Emails Not Sending
- Verify all environment variables are set correctly
- Check SMTP credentials are accurate
- Ensure SMTP_SECURE matches your port (true for 465, false for 587)
- Check email provider's security settings

### Emails Going to Spam
- Add your SMTP_FROM_EMAIL to email provider's verified senders
- Set up SPF and DKIM records for your domain
- Use a professional email address, not a generic one

### Form Submission Errors
- Check browser console for error messages
- Verify all required fields are filled
- Ensure email format is valid
- Check that API endpoint is accessible

## Security Best Practices

1. **Never commit credentials** to version control
2. **Use app-specific passwords** instead of main account passwords
3. **Rotate passwords** regularly
4. **Use environment variables** for all sensitive data
5. **Enable 2FA** on email accounts
6. **Monitor email logs** for suspicious activity

## Support

If you need help:
1. Check the error message in the browser console
2. Verify all environment variables are set
3. Test SMTP credentials with an email client first
4. Contact your email provider's support team

---

**Last Updated:** March 2026
**Form Location:** Estimate Section and contact page
**API Endpoint:** `/api/submit-estimate`
