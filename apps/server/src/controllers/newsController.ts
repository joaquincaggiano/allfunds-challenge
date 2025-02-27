import { NextFunction, Request, Response } from 'express';
import newsServices from '../services/newsServices';
import { NewsInput } from '../zod-schemas/newsSchema';

const newsController = {
  getNews: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const isAchieved = req.query.isAchieved === 'true';
      const page = Number(req.query.page) || 1;

      const news = await newsServices.getNews(page, isAchieved);

      res.status(200).json({
        data: news,
      });
    } catch (error) {
      next(error);
    }
  },
  getNewById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;

      const newFound = await newsServices.getNewById(id);

      res.status(200).json({
        data: newFound,
      });
    } catch (error) {
      next(error);
    }
  },
  createNews: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newsData = req.body as NewsInput;

      await newsServices.createNews(newsData);

      res.status(201).json({
        message: 'New created successfully',
      });
    } catch (error) {
      next(error);
    }
  },

  updateNews: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const newsData = req.body as NewsInput;

      await newsServices.updateNewById(id, newsData);

      res.status(200).json({
        message: 'New updated successfully',
      });
    } catch (error) {
      next(error);
    }
  },

  deleteNews: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      await newsServices.deleteNewById(id);

      res.status(200).json({
        message: 'New deleted successfully',
      });
    } catch (error) {
      next(error);
    }
  },
};

export default newsController;
