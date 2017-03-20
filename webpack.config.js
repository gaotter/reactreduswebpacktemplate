const path = require('path');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
 context: __dirname + "/",

 entry: {
     app: "./app/js/app.js"
 
 },

 output: {
   filename: "[name].js",
   path: __dirname + "/wwwroot/js",
   publicPath: '/js/'
 },
 plugins: [
     new CommonsChunkPlugin("commons") // Gives suport for multi page.
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