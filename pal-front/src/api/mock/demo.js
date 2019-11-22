/**
 * Created by zhaoquanfeng on 2019/11/20
 **/
import { createItemResponse } from './util';

const Mock = require('mockjs');
const Random = Mock.Random;

export default [
    ['onPost', '/test/post', () => {
        return createItemResponse({
            name: Random.cname(),
            age: Random.csentence(20, 40)
        });
    }],
    ['onGet', '/test/get', () => {
        return createItemResponse({
            name: Random.cname(),
            age: Random.csentence(20, 40)
        });
    }]
];
