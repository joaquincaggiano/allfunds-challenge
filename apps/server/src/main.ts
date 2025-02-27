import express from 'express';
import cors from 'cors';
import newsRouter from './routes/newsRouter';
import dotenv from 'dotenv';
import path from 'path';
import bodyParser from 'body-parser';
import connectDB from './db/db';
import errorHandler from './middlewares/errorHandler';

async function main() {
  const envPath = path.join(
    process.cwd(),
    'apps',
    'server',
    'src',
    'config',
    '.env'
  );

  dotenv.config({ path: envPath });

  const host = process.env.HOST ?? 'localhost';
  const port = process.env.PORT ? Number(process.env.PORT) : 3000;

  await connectDB();

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use('/api/news', newsRouter);

  app.use(errorHandler);

  app.listen(port, host, () => {
    console.log(`[ ready ] http://${host}:${port}`);
  });
}

main();
