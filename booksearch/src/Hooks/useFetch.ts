import axios, { AxiosRequestConfig } from "axios";
import { useCallback, useContext, useState } from "react";
import authContext from "../store/auth-context";
const request = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

interface UseFetchConfig<TData> {
  defaultValue: TData;
}

function useFetch<TData = any>(config: UseFetchConfig<TData>) {
  const [data, setData] = useState<TData>(config?.defaultValue);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { token, refresh } = useContext(authContext);

  const fetchData = useCallback(
    async (url: string, fetchConfig?: AxiosRequestConfig) => {
      setIsLoading(true);
      try {
        const { data } = await request.get<TData>(url, {
          ...fetchConfig,
          headers: { "X-Auth-Token": token, ...fetchConfig?.headers },
        });
        setData(data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          if (err.response?.status === 401) {
            refresh();
          }
        }
      } finally {
        setIsLoading(false);
      }
    },
    [refresh, token]
  );

  return {
    data,
    isLoading,
    fetchData,
  };
}

export default useFetch;
