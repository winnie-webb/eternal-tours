const path = require('path');

const reactJsBundle = 
{
  entry:'./public/book-ui/src/book.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname,"public","js", 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          { loader: 'style-loader', options: { injectType: 'styleTag' } },
          'css-loader',
        ],
      }
    ]
  }, 
  watch: true
}

module.exports = reactJsBundle;
