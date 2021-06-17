# market

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
### 启动项目，也可以先启动node本地服务器后再启动
```
npm run serve
```

### 创建一个本地的服务器,数据不是用爬虫爬取的，因此很简单且重复度很高，仅供本地测试
### 搭建服务器需要安装node和MongoDB数据库
```
cd node_supermarket
npm install

下面这步可以省略，但会缺失Home页面的两页图片数据
cd public
node for.js
cd ..

进入supermarket.js文件，将86到268行的注释解除，Ctrl+s保存
node supermarket.js

在supermarket.js，使用Ctrl+z，恢复注释，Ctrl+s保存
node serve

你需要两个终端来分别启动本地服务器与项目

```
### Create a local server to testing，need to install：node、MongoDB
```
cd node_supermarket
npm install

The following step can be omitted, but the two page image data of the home page will be missing
cd public
node for.js
cd ..

Enter the supermarket.js, release the comments on lines 86 to 268, and save with Ctrl + s
node supermarket.js

In supermarket.js, use Ctrl + Z to restore the comment and save it with Ctrl + s
node serve

You need two terminals to start the local server and the project respectively

```


### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
