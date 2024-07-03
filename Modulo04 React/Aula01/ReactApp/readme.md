npm init -y
npm install @babel/core babel-loader @babel/cli @babel/preset-env @babel/preset-react
npm install webpack webpack-dev-server
npm install react react-dom

npm install html-webpack-plugin
npm install -D webpack-cli

configura arquivo .babelrc

{
    "presets": ["@babel/preset-env", "@babel/preset-react"]
}

configurar aquivo webpack.config.js

const { template } = require('@babel/core')
const { plugins } = require('@babel/preset-env/lib/plugins-compat-data')
const HtmlwebPackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js',
    },
    target: 'web',
    devServer: {
        port: '5000',
        static: {
            directory: path.join(__dirname, 'public')
        },
        open: true,
        hot: true,
        liveReloaded: true
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        rules: {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }
    },
    plugins: [
        new HtmlwebPackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        })
    ]
}