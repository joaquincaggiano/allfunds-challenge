import CustomError from '../exceptions/customError';
import News from '../models/news';
import { NewsInput } from '../zod-schemas/newsSchema';

const newsServices = {
  getNews: async (page: number, isAchieved: boolean) => {
    const options = { archiveDate: isAchieved ? { $ne: null } : null}

    const news = await News.find(options)
      .skip((page - 1) * 10)
      .limit(10);

    return news;
  },
  getNewById: async (id: string) => {
    const newFound = await News.findById(id);

    if (!newFound) {
      throw new CustomError('New not found', 404);
    }

    return newFound;
  },
  createNews: async (news: NewsInput) => {
    await News.create(news);
  },
  updateNewById: async (id: string, newData: NewsInput) => {
    const newFound = await News.findByIdAndUpdate(id, newData, {
      new: true,
      runValidators: true,
    });

    if (!newFound) {
      throw new CustomError('New not found', 404);
    }
  },
  deleteNewById: async (id: string) => {
    const newFound = await News.findByIdAndDelete(id);

    if (!newFound) {
      throw new CustomError('New not found', 404);
    }
  },
};

export default newsServices;
