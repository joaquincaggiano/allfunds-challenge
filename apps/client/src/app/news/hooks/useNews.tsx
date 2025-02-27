import { useQuery } from "@tanstack/react-query";
import { getNews } from "../actions/news.actions";

interface UseNewsOptions {
    filterKey?: boolean;
}

export const useNews = ({ filterKey = false }: UseNewsOptions) => {
    const useNewsQuery = useQuery({
        queryKey: ["news", { filterKey }],
        queryFn: () => getNews({ filterKey }),
        staleTime: 1000 * 60 * 60, // 1 hour
      });

      return { useNewsQuery };
}