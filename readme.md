### init
`npm i -D webpack webpack-cli` 
### 配置html模板
`npm i -D html-webpack-plugin`
### 清除上次打包记录
`npm i -D clean-webpack-plugin`
### 解析css
`npm i -D style-loader css-loader`
`npm i -D less less-loader`
### css添加前缀
`npm i -D postcss-loader autoprefixer `
### 拆分css
`npm i -D mini-css-extract-plugin`
### css压缩
`npm i optimize-css-assets-webpack-plugin -D
`
### 打包图片
`npm i file-loader url-loader -D`
### js转义
```
npm i -D babel-loader @babel/preset-env @babel/core @babel/plugin-transform-runtime

npm i @babel/runtime @babel/runtime-corejs3
```
### 解析es6语法
`npm i @babel/polyfill -D`
### 浏览器中运行
`npm install webpack-dev-server -D`
###  区分环境
`npm install cross-env -D`
### webpack配置文件分离
`npm install --D webpack-merge`
### 代码分析
`webpack --profile --json > stats.json --config config/webpack.prod.config.js `
### 引入axios
`npm i axios -D`
### 使用eslint
`npm i eslint -D`
### 使用dll
### 使用多页面打包

TODO
- [ ] husky
- [ ] sentry
- [ ] classnames
- [ ] hooks-eslint
