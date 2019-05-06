/* global process */

import path from 'path';
import webpack from 'webpack';
import WriteFileWebpackPlugin from 'write-file-webpack-plugin';
import fileLoaderConfig from './loaders/fileLoaderConfig';
import graphqlLoaderConfig from './loaders/graphqlLoaderConfig';
import styleLoaderConfig from './loaders/styleLoaderConfig';
import scriptsLoaderConfig from './loaders/scriptsLoaderConfig';
import ManifestPlugin from 'webpack-manifest-plugin';
import CopyPlugin from 'copy-webpack-plugin';

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;

export const browserConfigGenerator = () => {
  return {
    mode: process.env.NODE_ENV || 'development',
    watch: process.env.watch === 'true',
    name: 'client',
    entry: [
      '@babel/polyfill',
      process.env.client_entry || './src/client/index.tsx'
    ],
    output: {
      path: path.resolve(process.cwd(), process.env.output || 'dist'),
      publicPath: '/',
      filename: 'bundle.js',
      chunkFilename:
        process.env.NODE_ENV === 'development'
          ? 'static/js/[name].chunk.js'
          : 'static/js/[name].[chunkhash:8].chunk.js',
    },
    module: {
      rules: [
        scriptsLoaderConfig(["react-loadable/babel",'@babel/plugin-syntax-dynamic-import'],),
        /** Rules for GraphQL */
        graphqlLoaderConfig,
        /** Rules for image */
        fileLoaderConfig,
        /** Rules for style */
        styleLoaderConfig,
        {
          test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico|json)$/,
          use: {
            loader: 'file-loader',
            query: {
              name: 'assets/[name].[ext]'
            }
          }
        }
      ],
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin(),
      new WriteFileWebpackPlugin(),
      new webpack.DefinePlugin({
        isBrowser: 'true',
        DEV: process.env.NODE_ENV === 'development',
        SSR_FETCH: true,
        PORT: process.env.port || 3000,
        ENDPOINT_CLIENT: process.env.endpoint_client || "'http://localhost:5001'",
        ENDPOINT_SERVER: process.env.endpoint_server || "'http://localhost:5001'",
      }),

      /** Create module list */
      new ReactLoadablePlugin({
        filename: `${path.resolve(process.cwd(), process.env.output || 'dist')}/react-loadable.json`,
      }),
      new ManifestPlugin({
        fileName: 'asset-manifest.json',
      }),
      /** Move assets to build directory */
      new CopyPlugin([
        {
          from: 'src/assets',
          to: `${path.resolve(process.cwd(), process.env.output || 'dist')}/assets`,
        }
      ])
    ],
    resolve: {
      extensions: ['.js', '.json', '.ts', '.tsx'],
      modules: ['node_modules'],
      /** @link https://webpack.js.org/configuration/resolve/#resolve-alias */
      alias: {
        /** маска пути для глобальных компонентов проекта */
        '@lib/ui': path.resolve('src/components/'),
        /** маска пути для стилей проекта */
        '@lib/styles': path.resolve('src/styles/'),
        /** маска пути для утилит проекта проекта */
        '@lib/utils': path.resolve('src/utils/'),
        '~': path.resolve(''),

        ...(process.env.hmr ? {
          'react-dom': '@hot-loader/react-dom',
        } : {}),

      },
    },
    stats: {
      cached: false,
      cachedAssets: false,
      chunks: false,
      chunkModules: false,
      colors: true,
      hash: false,
      modules: false,
      reasons: false,
      timings: true,
      version: false,
    },
  };
};

export default browserConfigGenerator;
