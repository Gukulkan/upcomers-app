var path = require('path');
var webpack = require('webpack');

var node_dir = __dirname + '/node_modules';

module.exports = {
    entry: {
        public: './frontend/src/app.js',
    },
    devtool: 'sourcemaps',
    cache: true,
    output: {
        path: __dirname,
        filename: './src/main/resources/static/js/[name].bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, './src/main/resources/static'),
        compress: true,
        port: 9000,
        watchContentBase: true,
        proxy: {
            '/api': 'http://localhost:8081'
        }
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-react"]
                    }
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader','css-loader',"less-loader"]
            },
        ]
    },
    plugins: [
       /*,
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin()*/
    ]
};