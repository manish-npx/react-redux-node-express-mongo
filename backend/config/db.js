import mongoose from 'mongoose';
import 'dotenv/config';

// const MONGO_URL = "mongodb+srv://admin:WP9cxUlV3fi7RkgI@blitzmarkiting.jjxon8w.mongodb.net/?retryWrites=true&w=majority";

console.log('MongoDB==>', process.env.MONGO_URL)
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
