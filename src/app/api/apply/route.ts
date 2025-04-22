import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { v4 as uuidv4 } from 'uuid';

// Initialize Resend - Get your API key at https://resend.com
// For production, use environment variables: process.env.RESEND_API_KEY
const RESEND_API_KEY = 're_bSYNvHeD_PXmznGkFUTvZ3ERd1jz5RdSC'; // 👈 Replace with your Resend API key
const resend = new Resend(RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Get form data
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const position = formData.get('position') as string;
    const resumeLink = formData.get('resumeLink') as string;
    const coverLetter = formData.get('coverLetter') as string;
    
    // Get the file if it exists
    const resumeFile = formData.get('resumeFile') as File | null;
    
    // Create application data object
    const applicationData = {
      id: uuidv4(),
      timestamp: new Date().toISOString(),
      name,
      email,
      phone,
      position,
      resumeLink: resumeLink || 'Not provided',
      coverLetter,
      resumeFileName: resumeFile?.name || null
    };
    
    // Log the application data
    console.log('Application received:', applicationData);
    
    // Check if Resend API key is available (skip this check since you've set an API key)
    if (!RESEND_API_KEY) {
      console.warn('⚠️ No valid Resend API key provided. Email not sent.');
      return NextResponse.json({
        success: true,
        message: 'Application received (email not sent - Resend API key not configured)',
        data: applicationData
      });
    }
    
    try {
      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Job Application</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; width: 150px;">Position:</td>
              <td style="padding: 8px;">${position}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Name:</td>
              <td style="padding: 8px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Email:</td>
              <td style="padding: 8px;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Phone:</td>
              <td style="padding: 8px;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Resume Link:</td>
              <td style="padding: 8px;">${resumeLink || 'Not provided'}</td>
            </tr>
          </table>
          <h3>Cover Letter:</h3>
          <div style="padding: 16px; background-color: #f7f7f7; border-radius: 4px;">
            ${coverLetter.replace(/\n/g, '<br>')}
          </div>
        </div>
      `;
      
      // Prepare attachments if file exists
      const attachments = [];
      if (resumeFile) {
        try {
          const buffer = Buffer.from(await resumeFile.arrayBuffer());
          attachments.push({
            filename: resumeFile.name,
            content: buffer
          });
        } catch (error) {
          console.error('Error processing resume file:', error);
        }
      }
      
      // Send email using Resend
      const { data, error } = await resend.emails.send({
        from: 'Brick Careers <onboarding@resend.dev>',
        to: ['davidyoum@yahoo.com'],
        subject: `Job Application: ${position} - ${name}`,
        html: emailHtml,
        attachments: attachments,
        replyTo: email
      });
      
      if (error) {
        throw new Error(`Failed to send email: ${error.message}`);
      }
      
      console.log('Email sent successfully:', data);
    } catch (emailError) {
      // Log email errors but don't fail the request
      console.error('Error sending email:', emailError);
      
      // Still return success to the user but include a note about email
      return NextResponse.json({
        success: true,
        message: 'Application received but email delivery failed',
        data: applicationData
      });
    }
    
    // Return success response
    return NextResponse.json({ 
      success: true,
      message: 'Application submitted successfully',
      data: applicationData
    });
    
  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json(
      { error: 'Failed to process application', details: (error as Error).message },
      { status: 500 }
    );
  }
} 