const tailwindcss = require('tailwindcss')
const path = require('path')

module.exports = {
    entry: './src/style.css',
    configureWebpack: {

    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer'),
    ]},
    module: {
      rules: [
        { test: /\.css$/, use: 'css-loader' },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        },
      ]
    }
  };
