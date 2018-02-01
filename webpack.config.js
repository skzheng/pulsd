const path = require('path');

module.exports = {
 context: path.join(__dirname, 'src'),
 entry: [
   './index.js',
 ],
//  output: {
//    path: path.join(__dirname, 'www'),
//    filename: 'bundle.js',
//  },
 output: {
  path: path.join(__dirname, 'public'),
  filename: 'bundle.js',

  // Compile as Widget

  //  library: 'Widget',
  //  libraryTarget: 'umd',
  //  umdNamedDefine: true,
 },

 module: {
   rules: [
     {
       test: /\.js$/,
       exclude: /node_modules/,
       use: [
         'babel-loader',
       ],
     },
     {
      test:/\.css$/,
      use:['style-loader','css-loader']
    }
   ],
   
 },
};