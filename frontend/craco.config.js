// eslint-disable-next-line @typescript-eslint/no-var-requires
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#7c3ba1',
              '@error-color': '#BB3838',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
