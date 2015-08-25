module.exports = {
  entry: './js/main.jsx',
  output: {
    path : '../dist',
    filename: 'bundle.js'
  },
  module : {
      loaders : [
        {text : /\.jsx?$/, loader : 'jsx-loader'},
        { test: /\.css$/, loader: 'style-loader!css-loader' },
        { test: /\.less$/, loader: 'style!css!less' },
        { test: /\.(png|jpg)$/, loader: 'url?limit=25000'}
      ]
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json', '.jsx', '.css', '.less'] 
  }
};
