import { newsApi } from '../api/newsApi';
import { New, NewResponse, NewsResponse } from '../interfaces/new.interface';
import { NewsInput } from '../schemas/new-schema';

interface GetNewsOptions {
  page: number;
  filterKey?: boolean;
}

export const getNews = async ({
  page = 1,
  filterKey = false,
}: GetNewsOptions): Promise<NewsResponse> => {
  const filterUrl = filterKey ? `isAchieved=${filterKey}` : '';

  const response = await newsApi.get<NewsResponse>(
    `/news?page=${page}${filterUrl !== '' ? `&${filterUrl}` : ''}`
  );

  return {
    news: response.data.news,
    totalPages: response.data.totalPages,
  };
};

export const getNewById = async (id: string): Promise<New> => {
  const { data } = await newsApi.get<NewResponse>(`/news/${id}`);

  return data.data;
};

export const createNew = async (newData: NewsInput): Promise<NewResponse> => {
  const { data } = await newsApi.post<NewResponse>('/news/create', newData);

  return {
    data: data.data,
    message: data.message,
  };
};

export const updateNewArchiveDate = async (
  id: string,
  isArchived: boolean
): Promise<NewResponse> => {
  const { data } = await newsApi.patch<NewResponse>(`/news/${id}/archive`, {
    isArchived,
  });

  return {
    data: data.data,
    message: data.message,
  };
};

export const deleteNew = async (id: string): Promise<NewResponse> => {
  const { data } = await newsApi.delete<NewResponse>(`/news/${id}`);

  return {
    data: data.data,
    message: data.message,
  };
};