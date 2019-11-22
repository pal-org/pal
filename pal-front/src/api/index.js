import axios from 'axios';
import { Message } from 'element-ui';

//TODO 问题在这里 mock的引入方式不对，导致程序报错
const usemock = true;
if (process.env.NODE_ENV === 'development' && usemock) {
    require('./mock');
}

const service = axios.create({
    timeout: new Date().getTime()
});

/**
 * 请求拦截
 * **/
service.interceptors.request.use(
  config => {
      return config;
  },
  error => {
      return Promise.reject(error);
  }
);

/**
 * 响应拦截
 * **/
service.interceptors.response.use(
  response => {
      debugger;
      if (response.status == 200) {
          const { data } = response;

          if (data.type == 0) {
              return data.data;
          } else {
              Message.error(data.msg);
              return Promise.reject(response);
          }
      } else {
          errorHandler(response);
      }
  }
);
//
// const toLogin = () => {
//     // router.push('/login');
// };

const errorHandler = ({ status } = response) => {
    switch (status) {
        case 400: {
            Message.error('请求参数错误');
            break;
        }
        case 401: {
            Message.error('请登录');
            break;
        }
        case 403: {
            Message.error('登录过期，请重新登录');
            break;
        }
        case 404: {
            Message.error('未找到资源或者接口');
            break;
        }
        case 408: {
            Message.error('服务器连接超时');
            break;
        }
        case 500: {
            Message.error('服务器内部错误');
            break;
        }
        case 503: {
            Message.error('服务器不可用');
            break;
        }
        case 504: {
            Message.error('网关连接超时');
            break;
        }
        default:
            Message.error(`请求失败，原因未知，状态码${status}`);

    }
};

export {
    service
};
