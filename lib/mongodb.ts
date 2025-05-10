// lib/mongodb.ts
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || '';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Define a custom interface for the global object
interface GlobalWithMongoose {
  mongoose?: MongooseCache;
}

// Extend globalThis to include mongoose
declare global {
  let mongoose: MongooseCache | undefined; // Changed 'var' to 'let'
}

// Type-safe access to global.mongoose
const globalWithMongoose = globalThis as GlobalWithMongoose;

const cached: MongooseCache = globalWithMongoose.mongoose || { conn: null, promise: null };

globalWithMongoose.mongoose = cached;

export async function connectToDatabase() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}