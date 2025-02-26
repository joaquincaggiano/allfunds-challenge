import { Request, Response } from 'express';
import newsServices from '../services/newsServices';
import { NewsInput } from '../zod-schemas/newsSchema';

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
    try {
      const newsData = req.body as NewsInput;

      await newsServices.createNews(newsData);

      res.status(201).json({
        message: 'New created successfully',
      });
    } catch (error: any) {
      res.status(500).json({
        message: error.message,
      });
    }
  },

  updateNews: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const newsData = req.body as NewsInput;

      await newsServices.updateNewById(id, newsData);

      res.json({
        message: 'New updated successfully',
      });
    } catch (error: any) {
      res.status(500).json({
        message: error.message,
      });
    }
  },

  deleteNews: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await newsServices.deleteNewById(id);

      res.json({
        message: 'New deleted successfully',
      });
    } catch (error: any) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
};

export default newsController;
