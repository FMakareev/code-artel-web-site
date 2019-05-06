/* global process */
import path from 'path';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';
import ManifestPlugin from 'webpack-manifest-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

import WriteFileWebpackPlugin from 'write-file-webpack-plugin';

import {fileLoaderConfig} from './loaders/fileLoaderConfig';
import graphqlLoaderConfig from './loaders/graphqlLoaderConfig';
import scriptsLoaderConfig from './loaders/scriptsLoaderConfig';


export const serverConfigGenerator = () => {
  const reStyle = /\.(css|less|styl|scss|sass|sss|svg)$/;
  console.log('process.cwd(): ', process.cwd());
  return {
    name: 'server',
    mode: process.env.NODE_ENV || 'development',
    watch: process.env.watch === 'true' || true,
    entry: ['@babel/polyfill', process.env.server_entry || './src/server/index.ts'],
    target: 'node',
    externals: [nodeExternals()],
    node: {
      __dirname: true,
    },
    devtool: 'inline-source-map',
    output: {
      path: path.resolve(process.cwd(), process.env.output || 'dist'),
      filename: 'server.js',
      publicPath: '/',
      chunkFilename:
        process.env.NODE_ENV === 'development'
          ? 'static/js/[name].chunk.js'
          : 'static/js/[name].[chunkhash:8].chunk.js',
    },
    module: {
      rules: [
        scriptsLoaderConfig(["react-loadable/babel",'dynamic-import-node'],),
        graphqlLoaderConfig,
        fileLoaderConfig,
        {
          test: reStyle,
          loader: 'ignore-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.json', '.ts', '.tsx'],
      modules: ['node_modules'],
      /** @link https://webpack.js.org/configuration/resolve/#resolve-alias */
      alias: {
        'react-dom': '@hot-loader/react-dom',
        /** маска пути для глобальных компонентов проекта */
        '@lib/ui': path.resolve('src/components/'),
        /** маска пути для стилей проекта */
        '@lib/styles': path.resolve('src/styles/'),
        /** маска пути для утилит проекта проекта */
        '@lib/utils': path.resolve('src/utils/'),
      },
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin(),

      new WriteFileWebpackPlugin(),
      new ManifestPlugin({
        fileName: 'asset-manifest.json',
      }),
      new webpack.DefinePlugin({
        isBrowser: false,
        DEV: process.env.NODE_ENV === 'development',
        SSR_FETCH: process.env.ssr_fetch,
        PORT: process.env.port || 3000,
        ENDPOINT_CLIENT: process.env.endpoint_client || "'http://localhost:5001'",
        ENDPOINT_SERVER: process.env.endpoint_server || "'http://localhost:5001'",
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
  };
};

export default serverConfigGenerator;
