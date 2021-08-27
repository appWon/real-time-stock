import axios, { AxiosError, AxiosRequestConfig } from 'axios';

export const api = axios.create({
  baseURL: 'https://api.upbit.com/v1',
  headers: { 'Content-Type': 'application/json' },
});

//데이터 : Pront => Back 전송시 호출
api.interceptors.request.use(
  (request: AxiosRequestConfig) => {
    return request;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

//데이터 : Back  => Pront 전송시 호출
api.interceptors.response.use(
  response => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
