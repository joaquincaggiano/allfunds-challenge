import { newsApi } from '../api/newsApi';
import { New, NewsResponse } from '../interfaces/new.interface';

interface GetNewsOptions {
  filterKey?: boolean;
}

export const getNews = async ({
  filterKey = false,
}: GetNewsOptions): Promise<New[]> => {
  const filterUrl = filterKey ? `isAchieved=${filterKey}` : '';

  const response = await newsApi.get<NewsResponse>(`/news?${filterUrl}`);

  return response.data.data;
};

export const getNewById = async (id: string): Promise<New> => {
  const { data } = await newsApi.get<New>(`/news/${id}`);

  return data;
};
