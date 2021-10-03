const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devPort = 3000;

const lessLoader = {
  loader: 'less-loader',
  options: {
    lessOptions: {
      javascriptEnabled: true
    }
  }
};

module.exports = {
  output: {
    path: __dirname + '/dist'
  },
  devServer: {
    hot: true,
    port: devPort
  },
  entry: {
    main: './src/index.tsx'
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-typescript', '@babel/preset-react', '@babel/preset-env']
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.theme\.(less|css)$/i,
        use: [
          {
            loader: 'style-loader',
            options: { injectType: 'lazyStyleTag' }
          },
          'css-loader',
          lessLoader
        ]
      },
      {
        test: /\.(less|css)$/,
        exclude: /\.theme\.(less|css)$/i,
        use: [
          'style-loader',
          'css-loader',
          lessLoader
        ]
      }
    ]
  },
  plugins: [new ReactRefreshWebpackPlugin(), new HtmlWebpackPlugin({
    title: 'Dynamically switch themes in Antd',
    template: 'index.html'
  })],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  }
};
