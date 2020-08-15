const path = require('path');
const htmlWepackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), //dist <- distribucion
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['*', '.mjs', '.js', '.svelte'] // .mjs <- modules
    },
    module: {
        rules: [
            {
                test: /\.js?$/, // expresion regular para encontrar los archivos js a los que se le van a aplicar un loader
                exclude: /node_modules/, //excluye los archivos js dentro de ese modulo
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.svelte$/,
                exclude: /node_modules/,
                use: {
                    loader: 'svelte-loader'
                }
            }
        ]
    },
    plugins: [
        new htmlWepackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        })
    ]
}