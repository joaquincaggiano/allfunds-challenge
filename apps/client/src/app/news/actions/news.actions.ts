import {
  New,
  NewResponse,
  NewsInput,
  NewsResponse,
} from '@allfunds-monorepo-app/shared';
import { newsApi } from '../api/newsApi';

interface GetNewsOptions {
  page: number;
  filterKey?: boolean;
}

export const getNews = async ({
  page = 1,
  filterKey = false,
}: GetNewsOptions): Promise<NewsResponse> => {
  try {
    const filterUrl = filterKey ? `isAchieved=${filterKey}` : '';

    const response = await newsApi.get<NewsResponse>(
      `/news?page=${page}${filterUrl !== '' ? `&${filterUrl}` : ''}`
    );

    return {
      news: response.data.news,
      totalPages: response.data.totalPages,
    };
  } catch (error: any) {
    throw new Error(error.message || 'Error fetching news');
  }
};

export const getNewById = async (id: string): Promise<New> => {
  try {
    const { data } = await newsApi.get<NewResponse>(`/news/${id}`);
    return data.data;
  } catch (error: any) {
    throw new Error(error.message || 'Error fetching news item');
  }
};

export const createNew = async (newData: NewsInput): Promise<NewResponse> => {
  try {
    const { data } = await newsApi.post<NewResponse>('/news/create', newData);
    return {
      data: data.data,
      message: data.message,
    };
  } catch (error: any) {
    throw new Error(error.message || 'Error creating news item');
  }
};

export const updateNew = async (
  id: string,
  newData: NewsInput
): Promise<NewResponse> => {
  try {
    const { data } = await newsApi.put<NewResponse>(
      `/news/${id}/update`,
      newData
    );
    return {
      data: data.data,
      message: data.message,
    };
  } catch (error: any) {
    console.log(error.message);
    throw new Error(error.message || 'Error updating new item');
  }
};

export const updateNewArchiveDate = async (
  id: string,
  isArchived: boolean
): Promise<NewResponse> => {
  try {
    const { data } = await newsApi.patch<NewResponse>(`/news/${id}/archive`, {
      isArchived,
    });
    return {
      data: data.data,
      message: data.message,
    };
  } catch (error: any) {
    throw new Error(error.message || 'Error archiving news item');
  }
};

export const deleteNew = async (id: string): Promise<NewResponse> => {
  try {
    const { data } = await newsApi.delete<NewResponse>(`/news/${id}`);
    return {
      data: data.data,
      message: data.message,
    };
  } catch (error: any) {
    throw new Error(error.message || 'Error deleting news item');
  }
};
