var path = require('path')
var webpack = require('webpack')
var env = process.env.NODE_ENV;

module.exports = {
    mode: env === 'production' ? env : 'development',
    entry: './lib/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: env === 'production' ? 'vue-tables-3.cdn.min.js' : 'vue-tables-3.cdn.js',
        libraryTarget: 'var',
        library: 'VueTables'
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    optimization: {
        minimize: env === 'production'
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    }
}

if (env === 'production') {
    module.exports.plugins = (module.exports.plugins || []).concat([
        //  new webpack.IgnorePlugin(/^vue$/),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])

}
