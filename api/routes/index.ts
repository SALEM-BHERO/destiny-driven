import { Router } from 'express';
import { 
  submitLoanApplication, 
  submitContactMessage, 
  getAllLoanApplications, 
  getAllContactMessages,
  getLoanApplicationById,
  updateLoanApplicationStatus
} from '../controllers/loanController';
import { registerUser, loginUser, getUserProfile } from '../controllers/userController';
import { auth, adminAuth } from '../middleware/auth';

const router = Router();

// User routes
router.post('/users/register', registerUser);
router.post('/users/login', loginUser);
router.get('/users/profile', auth, getUserProfile);

// Loan application routes
router.post('/loans/apply', submitLoanApplication);
router.get('/loans/applications', adminAuth, getAllLoanApplications);
router.get('/loans/:id', adminAuth, getLoanApplicationById);
router.put('/loans/:id/status', adminAuth, updateLoanApplicationStatus);

// Contact message routes
router.post('/contact/send', submitContactMessage);
router.get('/contact/messages', adminAuth, getAllContactMessages);

// Health check route
router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API is running',
    timestamp: new Date().toISOString()
  });
});

export default router;