/**
 * Created by zhaoquanfeng on 2019/11/20
 **/

const createItemResponse = (data) => {
    return [200, {
        type: 0,
        code: '0',
        msg: 'success',
        data
    }];
};

export {
    createItemResponse
};
