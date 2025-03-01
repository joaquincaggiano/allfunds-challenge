export interface New {
  _id: string;
  title: string;
  description: string;
  date: Date;
  content: string;
  author: string;
  archiveDate: Date | null;
}

export interface NewsResponse {
  news: New[];
  totalPages: number;
}

export interface NewResponse {
  data: New;
  message?: string;
}
