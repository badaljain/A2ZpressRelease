const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('./dist'),]
        filename: 'index_bundle.js'
    },
    module: {
        loaders:[
            { 
                test: /\.js$/, 
                loader: 'babel-loader', 
                exclude: /node_modules/ 
            },
            { 
                test: /\.jsx$/, 
                loader: 'babel-loader', 
                exclude: /node_modules/ 
            },
            { 
                test: /\.css$/, 
                loader: "style-loader!css-loader?modules" 
            },
            { 
                test: /\.png$/, 
                loader: "url-loader?limit=100000" 
            },
            { 
                test: /\.jpg$/, 
                loader: "file-loader" 
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {     
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'file-loader'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx' ,'.json'],
        modules: [path.join(__dirname, 'src'), 'node_modules']
    },
    plugins: [HtmlWebpackPluginConfig]
}