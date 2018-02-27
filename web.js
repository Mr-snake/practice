const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: {
     admin:'./admin/index.js',
     web:'./web/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    // 打包文件的访问路径
    publicPath:'../dist/'
  },
  // 发送http加载大图片
  module: {
  	//noparse减少查找
  	noParse:[/jquery/]
    rules: [
      {
      	// 正则表达式
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}  
          }	
        ]
      },
      // 小图标直接随css文件获取
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {}  
          }	
        ]
      },
      //处理scss文件
      {
        test: /\.sass$/,
        use: [
          {
            loader: 'style!css!sass-loader',
            options: {}  
          }	
        ]
      },
      //支持es6语法预编译
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            //减少查找项
            // exclude:'node_modules/',
            // include:'node_modules/',
            options: {}  
          }	
        ]
      }
    ]
  },
   plugins: [
   // 压缩
    new webpack.optimize.UglifyJsPlugin(),
    // new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};