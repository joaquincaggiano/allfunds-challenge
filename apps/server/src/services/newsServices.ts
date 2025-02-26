import { isValidObjectId } from 'mongoose';
import News, { INews } from '../models/news';

const newsServices = {
  getNews: async (page: number, isAchieved: boolean) => {
    const options = { archiveDate: isAchieved ? { $ne: null } : null}

    const news = await News.find(options)
      .skip((Number(page) - 1) * 10)
      .limit(10);

    return news;
  },
  getNewById: async (id: string) => {
    if (!id || !isValidObjectId(id)) {
      throw new Error('Invalid new ID');
    }

    const news = await News.findById(id);
    return news;
  },
  createNews: async (news: INews) => {
    const newNews = await News.create(news);
    return newNews;
  },
};

export default newsServices;
