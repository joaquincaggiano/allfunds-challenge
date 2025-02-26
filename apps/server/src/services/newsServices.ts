import News from '../models/news';
import { NewsInput } from '../zod-schemas/newsSchema';

const newsServices = {
  getNews: async (page: number, isAchieved: boolean) => {
    const options = { archiveDate: isAchieved ? { $ne: null } : null}

    const news = await News.find(options)
      .skip((Number(page) - 1) * 10)
      .limit(10);

    return news;
  },
  getNewById: async (id: string) => {
    const newFound = await News.findById(id);
    if (!newFound) {
      throw new Error('New not found');
    }
    return newFound;
  },
  createNews: async (news: NewsInput) => {
    const newNews = await News.create(news);

    return newNews;
  },
  updateNewById: async (id: string, newData: NewsInput) => {
    const newFound = await News.findByIdAndUpdate(id, newData, {
      new: true,
      runValidators: true,
    });

    if (!newFound) {
      throw new Error('New not found');
    }

    return newFound;
  },
  deleteNewById: async (id: string) => {
    const newFound = await News.findByIdAndDelete(id);
    if (!newFound) {
      throw new Error('New not found');
    }
  },
};

export default newsServices;
