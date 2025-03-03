import { New, NewsInput } from '@allfunds-monorepo-app/shared';
import CustomError from '../exceptions/customError';
import News from '../models/news';
import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';

const dataPath = path.join(process.cwd(), 'apps', 'server', 'src', 'db', 'db.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newsServices = {
  getNews: async (page: number, isAchieved: boolean) => {
    const options = { archiveDate: isAchieved ? { $ne: null } : null };
    const ITEMS_PER_PAGE = 6;

    const [news, total] = await Promise.all([
      News.find(options)
        .sort({ createdAt: -1 })
        .skip((page - 1) * ITEMS_PER_PAGE)
        .limit(ITEMS_PER_PAGE),
      News.countDocuments(options),
    ]);

    const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

    return {
      news,
      totalPages,
    };
  },

  getNewById: async (id: string) => {
    const newFound = await News.findById(id);

    if (!newFound) {
      throw new CustomError('New not found', 404);
    }

    return newFound;
  },

  seedNews: async () => {
    await News.deleteMany();

    const newsDataWithIds: New[] = data.map(newsItem => ({
      _id: new mongoose.Types.ObjectId(),
      ...newsItem,
    }));

    await News.insertMany(newsDataWithIds);
  },

  createNews: async (news: NewsInput) => {
    const newCreated = await News.create({ ...news, archiveDate: null });

    return newCreated;
  },

  updateNewById: async (id: string, newData: NewsInput) => {
    const newFound = await News.findByIdAndUpdate(id, newData, {
      new: true,
      runValidators: true,
    });

    if (!newFound) {
      throw new CustomError('New not found', 404);
    }

    return newFound;
  },

  updateNewArchiveDate: async (id: string, isArchived: boolean) => {
    const options = { archiveDate: isArchived ? new Date() : null };

    const newFound = await News.findByIdAndUpdate(id, options, {
      new: true,
      runValidators: true,
    });

    if (!newFound) {
      throw new CustomError('New not found', 404);
    }

    return newFound;
  },

  deleteNewById: async (id: string) => {
    const newFound = await News.findByIdAndDelete(id);

    if (!newFound) {
      throw new CustomError('New not found', 404);
    }

    return newFound;
  },
};

export default newsServices;
