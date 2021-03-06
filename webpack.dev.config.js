const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');

module.exports = merge(webpackBaseConfig, {
    devtool: 'cheap-module-source-map',
    output: {
        filename: 'js/[name].js',
        publicPath: '/',
        chunkFilename: 'js/[name].js',
    },
    resolve: {
        alias: {
            react: 'anujs/dist/ReactIE.js',
            'react-dom': 'anujs/dist/ReactIE.js',
            router: "anujs/dist/Router.js",
            'prop-types': 'anujs/lib/ReactPropTypes',
            devtools: 'anujs/lib/devtools',
            'create-react-class': 'anujs/lib/createClass',
        }
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "commons",
                    chunks: "all",
                    minChunks: 2
                }
            }
        }
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        host: 'localhost',
        port: 8000,
        inline: true,
        stats: { colors: true },
        contentBase: 'dist'
    }
});
