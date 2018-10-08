兼容IE6+ 的anujs demo。采用React/anujs库。部分代码来自于[anu-ie8-example](https://github.com/RubyLouvre/anu-ie8-example) 和 [anujs-webpack4-ie7-8](https://github.com/magicapple/anujs-webpack4-ie7-8). 路由采用[reach router](https://reach.tech/router)。anu中包含reach router，并对其进行兼容IE的改造。

原本想加入基于rematch 的状态管理，以便于在自己项目中使用。但非常遗憾，当我加入react-redux 后，在IE8 下就不兼容了。我试了各种polyfill 都没效果。如果有实现了的朋友，请多多指教。

在这里，再次感谢司徒正美老师的辛勤付出，anujs 是一个优秀的前端项目。

# 启动方式
```
 npm i
 npm start
```

# 命令说明
- `npm start`  //启动开发环境，IE8- 下测试无效。该模式下便于开发，支持自动编译和热加载
- `npm run start-ie`  //IE8 开发模式，一般用于IE8 下的调试, 不支持自动编译和热加载
- `npm run build-ie`  //编译兼容IE8 生产环境

由于`webpack-dev-server` 不支持IE8-，所以`start-ie`采用koa启动服务。启动后支持自动编译，但热加载自动刷新页面。简易项目开发时使用`npm start`启动，功能开发完成后用`npm run start-ie`启动在IE8-下进行调试。

`npm run start-ie`启动时，如果需要访问后端数据接口，可以在server.js中设置代理；`npm start`启动时，在webpack.dev.config.js 中设 webpack-dev-server的代理。