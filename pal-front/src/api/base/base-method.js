/**
 * Created by zhaoquanfeng on 2019/11/19
 **/
import { service } from '../index';

const get = (url) => {
    return (...params) => {
        return service.get(url, {
            params
        });
    };
};

const post = (url) => {
    return (...data) => {
        return service.post(url, data);
    };
};

export {
    get, post
};
