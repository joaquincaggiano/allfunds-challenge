import { NextFunction, Request, Response } from 'express';
import newsServices from '../services/newsServices';
import { NewsInput } from '../zod-schemas/newsSchema';

const newsController = {
  getNews: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const isAchieved = req.query.isAchieved === 'true';
      const page = Number(req.query.page) || 1;

      const { news, totalPages } = await newsServices.getNews(page, isAchieved);

      res.status(200).json({
        news,
        totalPages,
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
  createNew: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newsData = req.body as NewsInput;

      const newCreated = await newsServices.createNews(newsData);

      res.status(201).json({
        data: newCreated,
        message: 'New created successfully',
      });
    } catch (error) {
      next(error);
    }
  },

  updateNew: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const newsData = req.body as NewsInput;

      const newUpdated = await newsServices.updateNewById(id, newsData);

      res.status(200).json({
        data: newUpdated,
        message: 'New updated successfully',
      });
    } catch (error) {
      next(error);
    }
  },

  updateNewArchiveDate: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;

      const { isArchived } = req.body;

      const newUpdated = await newsServices.updateNewArchiveDate(
        id,
        isArchived
      );

      res.status(200).json({
        data: newUpdated,
        message: 'New archive date updated successfully',
      });
    } catch (error) {
      next(error);
    }
  },

  deleteNew: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const newDeleted = await newsServices.deleteNewById(id);

      res.status(200).json({
        data: newDeleted,
        message: 'New deleted successfully',
      });
    } catch (error) {
      next(error);
    }
  },
};

export default newsController;
