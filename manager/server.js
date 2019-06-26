const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-Hot-middleware');
const webpackConfig = require('./fe/webpack.config.js');
// app
const app = new express();
const PORT = 3000;

// webpack
const complier = webpack(webpackConfig);
const devMiddleware = webpackDevMiddleware(complier, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true //向控制台显示任何内容
});
const hotMiddleware = webpackHotMiddleware(complier, {
    log: false,
    heartbeat: 2000
});

// api
const route_api = require('./api');

// 挂载webpack
app.use(devMiddleware);
app.use(hotMiddleware);
// 设置静态访问文件路径
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));
// 挂载api
app.use('/api', route_api);
// 启动服务
app.listen(PORT,function(){
    console.log("成功启动：localhost:"+ PORT)
})
