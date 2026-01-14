import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // For development, we'll use a local MongoDB instance
    // In production, you would use a MongoDB Atlas connection string
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/destinydrivenfinance');

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;