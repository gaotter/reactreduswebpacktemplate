const path = require('path');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
 context: __dirname + "/",

 entry: {
     app: "./app/index.js"
 
 },

 output: {
   filename: "js/[name].js",
   path: __dirname + "/wwwroot"
 },
 plugins: [
     new CommonsChunkPlugin("commons"), // Gives suport for multi page.,
     new HtmlWebpackPlugin({
         template: './app/index.html'
     })
 ],

 resolve: {
   extensions: ['.js', '.jsx', '.json'],
   //root: path.resolve(__dirname, './app/js'),
   modules: [
       path.resolve(__dirname, './app/js'),
       "node_modules"
   ]
 },

 module: {
     rules: [{
         test: /\.jsx?$/,
         exclude: /node_modules/,
         
         use: [
             {
                 loader: "react-hot-loader"
             },
             {
                 loader: "babel-loader"
             }
         ]
         }
     ]
 },
}