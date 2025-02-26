import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

const envPath = path.join(process.cwd(), 'apps', 'server', 'src', 'config', '.env'); // esta ruta es así porque en tiempo de ejecución, el cwd es el directorio de la carpeta apps/server

dotenv.config({ path: envPath });

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI as string);
    console.log('✅ MongoDB conectado');
  } catch (error) {
    console.error('❌ Error conectando a MongoDB', error);
    process.exit(1); // Termina el proceso si no se conecta
  }
};

export default connectDB;
