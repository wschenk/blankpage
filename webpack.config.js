const autoprefixer = require('autoprefixer');
const importer = require( 'postcss-easy-import' )

module.exports = [{
  entry: './theme.scss',
  output: {
    // This is necessary for webpack to compile
    // But we never use style-bundle.js
    filename: 'static/js/style-bundle.js',
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
          loader: 'file-loader',
          options: {
            name: 'static/css/bundle.css',
          },
        },
        {
          loader: 'extract-loader'
        },
        {
          loader: 'css-loader',
          options: {
            includePaths: ['./node_modules']
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [autoprefixer({
              grid: false
            }),
          importer({
            // extentions: ['css', 'eot', 'otf', 'woff', 'ttf', 'woff2']
          })]
          }
        },
        {
          loader: 'sass-loader',
          options: {
            includePaths: ['./node_modules']
          }
        },
      ]
    },
    {
      // Exclude `js` files to keep "css" loader working as it injects
      // its runtime that would otherwise processed through "file" loader.
      // Also exclude `html` and `json` extensions so they get processed
      // by webpacks internal loaders.
      exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /\.scss$/],
      loader: 'file-loader',
      options: {
        name: '[name].[hash:8].[ext]',
        outputPath: 'static/css/fonts',
        publicPath: 'fonts/'
      }
    }
  ]
  },
}];


module.exports.push({
  entry: './theme.js',
  output: {
    filename: 'static/js/bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }
  ]
  },
});
