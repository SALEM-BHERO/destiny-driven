import type { Request, Response } from 'express';
import { 
  sendLoanApplicationConfirmation, 
  sendContactConfirmation, 
  sendAdminLoanNotification, 
  sendAdminContactNotification 
} from '../services/emailService';
import { LoanApplication, ContactMessage } from '../models/databaseModels';

// Submit a loan application
export const submitLoanApplication = async (req: Request, res: Response) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      loanType,
      message
    } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !loanType) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // Create new loan application
    const newApplication = new LoanApplication({
      firstName,
      lastName,
      email,
      phone,
      loanType,
      message,
      status: 'pending'
    });

    const savedApplication = await newApplication.save();

    // Send confirmation email
    sendLoanApplicationConfirmation(
      savedApplication.email,
      `${savedApplication.firstName} ${savedApplication.lastName}`,
      savedApplication.loanType,
      savedApplication._id.toString()
    );

    // Notify admin
    sendAdminLoanNotification(
      process.env.ADMIN_EMAIL || 'admin@destinydrivenfinance.com',
      `${savedApplication.firstName} ${savedApplication.lastName}`,
      savedApplication.loanType,
      savedApplication._id.toString()
    );

    res.status(201).json({
      success: true,
      message: 'Loan application submitted successfully',
      applicationId: savedApplication._id
    });
  } catch (error: any) {
    console.error('Error submitting loan application:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

// Submit a contact message
export const submitContactMessage = async (req: Request, res: Response) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      message
    } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // Create new contact message
    const newMessage = new ContactMessage({
      firstName,
      lastName,
      email,
      phone,
      message
    });

    const savedMessage = await newMessage.save();

    // Send confirmation email
    sendContactConfirmation(
      savedMessage.email,
      `${savedMessage.firstName} ${savedMessage.lastName}`
    );

    // Notify admin
    sendAdminContactNotification(
      process.env.ADMIN_EMAIL || 'admin@destinydrivenfinance.com',
      `${savedMessage.firstName} ${savedMessage.lastName}`,
      savedMessage.email
    );

    res.status(201).json({
      success: true,
      message: 'Message sent successfully'
    });
  } catch (error: any) {
    console.error('Error submitting contact message:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

// Get all loan applications (admin only)
export const getAllLoanApplications = async (req: Request, res: Response) => {
  try {
    const applications = await LoanApplication.find().sort({ submittedAt: -1 });
    res.status(200).json({
      success: true,
      data: applications
    });
  } catch (error: any) {
    console.error('Error fetching loan applications:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

// Get all contact messages (admin only)
export const getAllContactMessages = async (req: Request, res: Response) => {
  try {
    const messages = await ContactMessage.find().sort({ submittedAt: -1 });
    res.status(200).json({
      success: true,
      data: messages
    });
  } catch (error: any) {
    console.error('Error fetching contact messages:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

// Get a specific loan application by ID
export const getLoanApplicationById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const application = await LoanApplication.findById(id);
    
    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Loan application not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: application
    });
  } catch (error: any) {
    console.error('Error fetching loan application:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

// Update loan application status (admin only)
export const updateLoanApplicationStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const application = await LoanApplication.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    
    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Loan application not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Loan application status updated',
      data: application
    });
  } catch (error: any) {
    console.error('Error updating loan application status:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};