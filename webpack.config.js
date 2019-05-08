const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const uglify = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
module.exports = {
    entry: {
        app: __dirname + '/src/index.js',//唯一入口文件,__dirname是nodejs里的一个全局变量，它指向的是我们项目的根目录
    },
    output: {
        path: path.join(__dirname, './dist'),//打包后的文件存放的地方
        filename: 'main.js'
    },
    mode: 'development',
    module: {
        rules: [
            {test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/}, // 千万别忘记添加 exclude 排除项
            {test: /\.css$/, use: ['style-loader', 'css-loader']}, // 打包处理 CSS 样式表的第三方loader
            {test: /\.ttf|woff|woff2|eot|svg$/, use: 'url-loader'}, // 打包处理 字体文件 的loader
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]', 'sass-loader']
            },
            {test: /\.vue$/, use: 'vue-loader'},
            {test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader'}
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.vue'],
        alias: { // 表示别名
            '@': path.join(__dirname, './src') // 这样，@ 就表示 项目根目录中 src 的这一层路径
        }
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: "./index.html"
        }),
        new VueLoaderPlugin(),
        new uglify(),
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin({ analyzerPort: 8919 })
    ]
}