import { Request, Response } from 'express';
import News from '../models/news';
import newsServices from '../services/newsServices';

const newsController = {
  getNews: async (req: Request, res: Response) => {
    try {
      const isAchieved = req.query.isAchieved === 'true';
      const page = Number(req.query.page) || 1;

      const news = await newsServices.getNews(page, isAchieved);

      res.status(200).json({
        data: news,
      });
    } catch (error: any) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
  getNewById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const news = await newsServices.getNewById(id);
      res.status(200).json({
        data: news,
      });
    } catch (error: any) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
  createNews: async (req: Request, res: Response) => {
    const { title, content, author, date } = req.body;
    const news = await News.create({ title, content, author, date });
    res.json(news);
  },
  updateNews: async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, content, author, date } = req.body;
    const news = await News.findByIdAndUpdate(id, {
      title,
      content,
      author,
      date,
    });
    res.json(news);
  },
  deleteNews: async (req: Request, res: Response) => {
    const { id } = req.params;
    await News.findByIdAndDelete(id);
    res.json({ message: 'News deleted' });
  },
};

export default newsController;
