var path = require('path')
var webpack = require('webpack')
var env = process.env.NODE_ENV;

module.exports = {
    mode: 'production',
    entry: './lib/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'vue-tables-3.npm.min.js',
        libraryTarget: "commonjs"
    },
    resolve: {
        // symlinks: false,
        // alias: {
        //     'vue$': 'vue/dist/vue.esm.js',
        //     '@': path.resolve(__dirname, 'src')
        // },
            extensions: [".js", ".jsx"]
    },
    externals: {
        'vue': {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    // optimization: {
    //     minimize: env === 'production'
    // },
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
        // noInfo: true
    },
    performance: {
        hints: false
    }
}

// if (env === 'production') {
//     module.exports.plugins = (module.exports.plugins || []).concat([
//         //  new webpack.IgnorePlugin(/^vue$/),
//         new webpack.DefinePlugin({
//             'process.env': {
//                 NODE_ENV: '"production"'
//             }
//         }),
//         new webpack.LoaderOptionsPlugin({
//             minimize: true
//         })
//     ])
//
// }
