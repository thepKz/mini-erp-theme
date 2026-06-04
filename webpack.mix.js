let { mix } = require('theme-mix')

mix.setPublicPath('.')

// Configure to use modern 'sass' instead of deprecated 'node-sass'
mix.options({
  processCssUrls: false
})

mix.webpackConfig({
  resolve: {
    symlinks: false,
    modules: [
      path.resolve(__dirname, '..', 'node_modules'),
      'node_modules'
    ],
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules\/(core-js|@babel\b)|bower_components)/,
      use: [
        {
          loader: 'babel-loader',
          options: Config.babel()
        }
      ]
    }, {
      test: /\.scss$/,
      use: [
        {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
            sassOptions: {
              fiber: false,
            }
          }
        }
      ]
    }]
  }
})