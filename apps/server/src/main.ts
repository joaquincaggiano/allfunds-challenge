import express from 'express';
import cors from 'cors';
import newsRouter from './routes/news';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/news', newsRouter);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
