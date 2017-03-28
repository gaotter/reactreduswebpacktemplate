const path = require('path');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
module.exports = {
 context: __dirname + "/",

 entry: {
     app: "./app/src/index.tsx"
 
 },

 output: {
   filename: "js/[name].js",
   path: __dirname + "/wwwroot"
 },
 plugins: [
    // new CommonsChunkPlugin("commons"), // Gives suport for multi page.,
     new HtmlWebpackPlugin({
         template: './app/index.html'
     })
 ],

 resolve: {
   extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
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
        },
            { test: /\.ts(x?)$/, exclude: /node_modules/, use: 'babel-loader' },
                { test: /\.tsx?$/, exclude: /node_modules/, use: 'awesome-typescript-loader?silent=true' },
        
     ]
 },
}