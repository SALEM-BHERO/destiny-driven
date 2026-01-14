import nodemailer from 'nodemailer';
import type { ILoanApplication, IContactMessage } from '../models/databaseModels';

// Create transporter for sending emails
const createTransporter = () => {
  // For development, we'll use Ethereal.email to simulate email sending
  // In production, you would use real SMTP credentials
  const isGmail = process.env.EMAIL_HOST === 'smtp.gmail.com';
  
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.ethereal.email',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: isGmail, // true for 465 (Gmail), false for other ports
    auth: {
      user: process.env.EMAIL_USER || 'your_ethereal_email@ethereal.email',
      pass: process.env.EMAIL_PASS || 'your_ethereal_password'
    }
  });
};

// Send loan application confirmation email to applicant
export const sendLoanApplicationConfirmation = async (
  applicantEmail: string,
  applicantName: string,
  loanType: string,
  applicationId: string
): Promise<boolean> => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"Destiny Driven Finance" <${process.env.EMAIL_FROM || 'noreply@destinydrivenfinance.com'}>`,
      to: applicantEmail,
      subject: 'Loan Application Received - Destiny Driven Finance',
      text: `
Dear ${applicantName},

Thank you for submitting your loan application with Destiny Driven Finance. We have received your application for ${loanType} and it is currently under review.

Application ID: ${applicationId}

Our team will review your application and contact you within 24-48 hours. If you have any questions, please feel free to contact us at 0714635258 or destinydrivenf@gmail.com.

Best regards,
The Destiny Driven Finance Team
#TeamDestiny - Building Wealth For Generations
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Loan Application Confirmation</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="text-align: center; margin-bottom: 30px;">
      <h1 style="color: #2D3748;">Destiny Driven Finance</h1>
      <p style="color: #DD6B20; font-weight: bold;">Building Wealth For Generations</p>
    </div>
    
    <div style="background-color: #F7FAFC; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
      <h2 style="color: #2D3748;">Loan Application Received</h2>
      
      <p>Dear <strong>${applicantName}</strong>,</p>
      
      <p>Thank you for submitting your loan application with Destiny Driven Finance. We have received your application for <strong>${loanType}</strong> and it is currently under review.</p>
      
      <div style="background-color: #EBF8FF; padding: 15px; border-radius: 6px; margin: 20px 0;">
        <p><strong>Application ID:</strong> ${applicationId}</p>
      </div>
      
      <p>Our team will review your application and contact you within 24-48 hours. If you have any questions, please feel free to contact us at <a href="tel:0714635258" style="color: #3182CE;">0714635258</a> or <a href="mailto:destinydrivenf@gmail.com" style="color: #3182CE;">destinydrivenf@gmail.com</a>.</p>
      
      <p>Best regards,<br>
      <strong>The Destiny Driven Finance Team</strong></p>
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #E2E8F0;">
        <p style="color: #48BB78; font-weight: bold;">#TeamDestiny - Building Wealth For Generations</p>
      </div>
    </div>
  </div>
</body>
</html>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Loan application confirmation email sent: %s', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending loan application confirmation email:', error);
    return false;
  }
};

// Send contact form confirmation email to sender
export const sendContactConfirmation = async (
  senderEmail: string,
  senderName: string
): Promise<boolean> => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"Destiny Driven Finance" <${process.env.EMAIL_FROM || 'noreply@destinydrivenfinance.com'}>`,
      to: senderEmail,
      subject: 'Message Received - Destiny Driven Finance',
      text: `
Dear ${senderName},

Thank you for contacting Destiny Driven Finance. We have received your message and our team will get back to you as soon as possible.

If your inquiry is urgent, please feel free to contact us directly at 0714635258 or destinydrivenf@gmail.com.

Best regards,
The Destiny Driven Finance Team
#TeamDestiny - Building Wealth For Generations
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Confirmation</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="text-align: center; margin-bottom: 30px;">
      <h1 style="color: #2D3748;">Destiny Driven Finance</h1>
      <p style="color: #DD6B20; font-weight: bold;">Building Wealth For Generations</p>
    </div>
    
    <div style="background-color: #F7FAFC; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
      <h2 style="color: #2D3748;">Message Received</h2>
      
      <p>Dear <strong>${senderName}</strong>,</p>
      
      <p>Thank you for contacting Destiny Driven Finance. We have received your message and our team will get back to you as soon as possible.</p>
      
      <p>If your inquiry is urgent, please feel free to contact us directly at <a href="tel:0714635258" style="color: #3182CE;">0714635258</a> or <a href="mailto:destinydrivenf@gmail.com" style="color: #3182CE;">destinydrivenf@gmail.com</a>.</p>
      
      <p>Best regards,<br>
      <strong>The Destiny Driven Finance Team</strong></p>
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #E2E8F0;">
        <p style="color: #48BB78; font-weight: bold;">#TeamDestiny - Building Wealth For Generations</p>
      </div>
    </div>
  </div>
</body>
</html>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Contact confirmation email sent: %s', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending contact confirmation email:', error);
    return false;
  }
};

// Send notification email to admin when a new loan application is submitted
export const sendAdminLoanNotification = async (
  adminEmail: string,
  applicantName: string,
  loanType: string,
  applicationId: string
): Promise<boolean> => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"Destiny Driven Finance" <${process.env.EMAIL_FROM || 'noreply@destinydrivenfinance.com'}>`,
      to: adminEmail,
      subject: `New Loan Application - ${loanType}`,
      text: `
A new loan application has been submitted:

Applicant: ${applicantName}
Loan Type: ${loanType}
Application ID: ${applicationId}
Submission Time: ${new Date().toLocaleString()}

Please review this application in the admin panel.
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Admin loan notification email sent: %s', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending admin loan notification email:', error);
    return false;
  }
};

// Send notification email to admin when a new contact message is received
export const sendAdminContactNotification = async (
  adminEmail: string,
  senderName: string,
  senderEmail: string
): Promise<boolean> => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"Destiny Driven Finance" <${process.env.EMAIL_FROM || 'noreply@destinydrivenfinance.com'}>`,
      to: adminEmail,
      subject: `New Contact Message from ${senderName}`,
      text: `
A new contact message has been received:

From: ${senderName} (${senderEmail})
Submission Time: ${new Date().toLocaleString()}

Please check the contact messages in the admin panel.
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Admin contact notification email sent: %s', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending admin contact notification email:', error);
    return false;
  }
};