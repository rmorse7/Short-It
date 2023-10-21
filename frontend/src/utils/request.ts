import { notification } from 'antd';
import axios from 'axios';

interface RequestParams<T> {
  method: 'GET' | 'POST' | 'DELETE';
  url: string;
  body?: T;
  header?: any;
}

interface TResponse<T> {
  errCode: number;
  errMsg?: string;
  data?: T;
}

const service = axios.create({
  // withCredentials: true,
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5001/api'
      : 'https://rylan-mock-server.vercel.app/api',
});

service.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    config.headers['Access-Control-Allow-Origin'] = '*';
    // if (localStorage.getItem('token')) {
    //   config.headers['userId'] = localStorage.getItem('token')!;
    // }
  }
  return config;
});

service.interceptors.response.use(
  (res) => {
    if (res.data.errCode !== 0) {
      notification.error({
        message: res.data.errMsg,
      });

      throw new Error(res.data.errMsg);
    }

    return res;
  },
  (error) => {
    const { response } = error;

    if (!response) {
      notification.error({
        message: error.message,
      });

      throw new Error(error.message);
    }

    if (response.status === 500) {
      notification.error({
        message: 'Server Error',
      });
    } else {
      notification.error({
        message: response.data,
      });
    }

    throw new Error(response.data);
  }
);

const request = async <ResponseType, RequestType = unknown>(
  params: RequestParams<RequestType>
): Promise<TResponse<ResponseType>> => {
  const response = await service.request<TResponse<ResponseType>>({
    method: params.method,
    url: params.url,
    data: params.method === 'GET' ? null : JSON.stringify(params.body || {}),
  });

  return response.data;
};

export default request;
