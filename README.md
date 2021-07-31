# Set React Basic Skeleton

1. index.js (entry point)
2. npm init -y
3. install modules
4. create webpack.config.js
5. create .babelrc
6. development live server


### 3. install modules
7 webpack modules, 3 babel modules, 2 react modules

###### webpack
~~~
npm i webpack webpack-cli style-loader css-loader babel-loader html-webpack-plugin webpack-dev-server
~~~

1. webpack : core & cli
2. style-loader & css-loader
3. babel-loader
4. html-webpack-plugin
5. webpack-dev-server

###### babel
~~~
npm i @babel/core @babel/preset-react @babel/preset-env
~~~


###### react
~~~
npm i react react-dom
~~~






### 4. create webpack.config.js
instruction for webpack about how-to and target files to transpilling, and its final destination folder.
1. rules: to process js with babel-loader
2. plugins: set html origin and filename

~~~
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: './index.html'
})

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
    },
  plugins: [htmlPlugin]
}
~~~

###### Assumptions
**Webpack it will assume the entry point of your project is src/index** and will output the result in dist/main.js minified and optimized for production.




### 5. create .babelrc
instruction for babel presets
1. @babel/preset-env
  - targets: define platform
2. @babel/preset-react
  - activation

~~~
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ],
    "@babel/preset-react"
  ]
}
~~~






### 6. development live server
in package.json
~~~
"scripts": {
  "start": "webpack serve --mode development"
}
~~~

It will serve in `localhost:8080`






















































//
