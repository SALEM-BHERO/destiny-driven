import mongoose, { Document, Schema } from 'mongoose';

// User Model
export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  createdAt: Date;
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
  createdAt: { type: Date, default: Date.now }
});

export const User = mongoose.model<IUser>('User', UserSchema);

// Loan Application Model
export interface ILoanApplication extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  loanType: string;
  message?: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: Date;
}

const LoanApplicationSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  loanType: { type: String, required: true },
  message: { type: String },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  submittedAt: { type: Date, default: Date.now }
});

export const LoanApplication = mongoose.model<ILoanApplication>('LoanApplication', LoanApplicationSchema);

// Contact Message Model
export interface IContactMessage extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  submittedAt: Date;
}

const ContactMessageSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now }
});

export const ContactMessage = mongoose.model<IContactMessage>('ContactMessage', ContactMessageSchema);

// Branch Model
export interface IBranch extends Document {
  name: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  status: 'open' | 'closed' | 'coming-soon';
  isHeadOffice: boolean;
  openingHours: {
    mondayFriday: string;
    saturday: string;
    sunday: string;
  };
}

const BranchSchema: Schema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  status: { type: String, enum: ['open', 'closed', 'coming-soon'], default: 'open' },
  isHeadOffice: { type: Boolean, default: false },
  openingHours: {
    mondayFriday: { type: String, required: true },
    saturday: { type: String, required: true },
    sunday: { type: String, required: true }
  }
});

export const Branch = mongoose.model<IBranch>('Branch', BranchSchema);