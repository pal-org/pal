/**
 * Created by zhaoquanfeng on 2019/11/19
 **/
const axios = require('axios');
const Mock = require('mockjs');
const MockAdapter = require('axios-mock-adapter');
const mock = new MockAdapter(axios);
const files = require.context('.', false, /.js$/);

// for (let file of mockContext.keys()) {
//     if (file === './index.js') continue;
//     const fileModule = mockContext(file).default;
//
//     for (let val of fileModule) {
//         mmock(...val);
//     }
// }

files.keys().forEach(file => {
    if (file === './index.js') return;
    let module = files(file).default;
    module.forEach(([method, url, ...param]) =>
      mock[method](url).reply(...param)
    );
});


