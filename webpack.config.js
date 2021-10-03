const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devPort = 3000;

module.exports = {
  devtool: 'eval-source-map',
  output: {
    path: __dirname + '/dist',
  },
  devServer: {
    hot: true,
    port: devPort,
  },
  entry: {
    main: './src/index.tsx',
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ["@babel/preset-typescript", '@babel/preset-react', '@babel/preset-env'],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.theme\.less$/i,
        use: [
          {
            loader: 'style-loader',
            options: { injectType: 'lazyStyleTag' },
          },
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /(?<!\.theme)\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [new ReactRefreshWebpackPlugin(), new HtmlWebpackPlugin({
    title: "Dynamically switch themes in Antd",
    template: "index.html",
  })],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
};
