const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? 'test' : '/',

    //outputDir：'dist':
    outputDir: 'dist',
    indexPath: 'index.flt',

    //是否使用eslint
    lintOnSave: true,

    // presets: [['@vue/app', { polyfills: ['es6.promise', 'es6.symnol'] }]],

    //生产原映射 如果不需要生产华景的源映射，那么将此设置为false可以加速生产构建
    productionSourceMap: true,

    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less'
            //pattern: [path.resolve(__dirname, 'src/assets/css/global.less')]
        }
    },

    // configureWebpack: config => {
    //     if (process.env.NODE_ENV === 'production') {
    //         //生产环境配置
    //         config.mode = 'production';
    //
    //         Object.assign(config, {
    //             plugins: [
    //                 ...config.plugins,
    //                 new UglifyjsWebpackPlugin({
    //                     uglifyOptions: {
    //                         compress: {},
    //                         mangle: false
    //                     },
    //                     sourceMap: true,
    //                     parallel: true
    //                 })
    //             ]
    //         });
    //     } else {
    //         //为开发环境修改配置
    //         config.mode = 'development';
    //         Object.assign((config), {
    //             plugins: [
    //                 ...config.plugins
    //             ]
    //         });
    //     }
    // },

    devServer: {
        port: 8080,
        host: 'localhost',
        https: false, //https
        open: false, //配置是否自动启动浏览器
        //配置使用多代理，拦截标志请根据后端提供的上下文
        proxy: {
            '/tt': {
                target: 'http://127.0.0.1',
                ws: true,
                changeOrigin: true,
                pathRewrite: {}
            }
        }
    }

};
