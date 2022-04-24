const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CracoLessPlugin = require('craco-less');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const CracoSwcPlugin = require('craco-swc');
const CracoAlias = require('craco-alias');

const path = require('path');
const pathResolve = pathUrl => path.join(__dirname, pathUrl);

const isAnalyzer = () => {
  const analyzerMode = process.env.REACT_APP_INTERACTIVE_ANALYZE;
  const plugins = [new AntdDayjsWebpackPlugin()];
  if (analyzerMode) {
    plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'server' }));
  }
  return plugins;
};

module.exports = () => {
  const plugins = isAnalyzer();
  return {
    webpack: {
      configure: {
        cache: true,
      },
      plugins,
    },
    babel: {
      plugins: [['import', { libraryName: 'bellejs', libraryDirectory: 'es', style: true }]],
    },
    plugins: [
      {
        plugin: CracoLessPlugin,
        options: {
          lessLoaderOptions: {
            lessOptions: {
              javascriptEnabled: true,
            },
          },
        },
      },
      {
        plugin: CracoAlias,
        options: {
          source: 'tsconfig',
          // baseUrl SHOULD be specified
          // plugin does not take it from tsconfig
          baseUrl: '.',
          /* tsConfigPath should point to the file where "baseUrl" and "paths" 
           are specified*/
          tsConfigPath: './tsconfig.paths.json',
        },
      },
      {
        plugin: {
          ...CracoSwcPlugin,
          overrideCracoConfig: ({ cracoConfig }) => {
            if (typeof cracoConfig.eslint.enable !== 'undefined') {
              cracoConfig.disableEslint = !cracoConfig.eslint.enable;
            }
            delete cracoConfig.eslint;
            return cracoConfig;
          },
          overrideWebpackConfig: ({ webpackConfig, cracoConfig }) => {
            if (
              typeof cracoConfig.disableEslint !== 'undefined' &&
              cracoConfig.disableEslint === true
            ) {
              webpackConfig.plugins = webpackConfig.plugins.filter(
                instance => instance.constructor.name !== 'ESLintWebpackPlugin',
              );
            }
            return webpackConfig;
          },
        },
        options: {
          swcLoaderOptions: {
            jsc: {
              externalHelpers: true,
              target: 'es5',
              parser: {
                syntax: 'typescript',
                tsx: true,
                dynamicImport: true,
                exportDefaultFrom: true,
              },
            },
          },
        },
      },
    ],
  };
};
