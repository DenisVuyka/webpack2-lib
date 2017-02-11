const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        extensions: ['.ts', '.js'],
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: ['ts-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html-loader'

            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'null-loader'
            },
            {
                test: /\.css$/,
                exclude: path.join(__dirname, 'src'),
                loader: 'null-loader'
            },
            {
                test: /\.css$/,
                include: path.join(__dirname, 'src'),
                loader: 'raw-loader'
            }
        ]
    },

    plugins: [
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            path.join(__dirname, 'src'), // location of your src
            {} // a map of your routes
        )
    ]
}
