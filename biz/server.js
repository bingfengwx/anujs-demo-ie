const path = require('path');
const proxy = require('koa2-proxy');

const column = '../dist';

proxy.static(path.resolve(__dirname, column));

// 转发请求到指定host
proxy.when('/api', function(ctx) {
    ctx.request.host = 'www.test.com';
    ctx.request.protocol = 'http';
});

// 监听端口
proxy.listen(8000);
