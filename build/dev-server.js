require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var http = require('http')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')


// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
const server = require('http').Server(app);

const io = require('socket.io')(server);
// var io = require('socket.io')(server, {
//   "serveClient": false,
//   "transports": ['websocket', 'polling']
// });

io.on('connection', (socket) => {


  // 群聊
  socket.on('sendGroupMsg', function (data) {

    socket.broadcast.emit('receiveGroupMsg', data);
  });

  // 上线
  socket.on('online', name => {
    socket.broadcast.emit('online', name)
  });

});

// io.on('connection', function (socket) {
//   //console.log('启动了Socket.io');

//   socket.on('sendGroupMsg', function (value) {
  
//     console.log("我听到了！！！");
//     this.broadcast.emit('receiveGroupMsg', value);
//   })
//   // socket.broadcast.emit('user connected');
// })

/*
* 自己新增 开始 
*/

let bodyParse = require('body-parser'); // 接收post数据

app.set('views', '../'); // 设置前端模板录

app.set('view engine', 'html'); // 设置前端模板文件类型

app.use(bodyParse.json()); // 用来接收post提交的json数据

app.use(bodyParse.urlencoded({ extended: true })); // 也可以接收任何数据类型的数据，包括文本、视频、图片等

app.use(require('../server/index')); // 加载路由
/*
* 自己新增 结束
*/


var apiRoutes = express.Router()
var compiler = webpack(webpackConfig)

apiRoutes.get('/news/:type', (req, res) => {
  let type = req.params.type;
  function search(tab) {
    return new Promise((resolve, reject) => {
      let searchResult = '';
      url = 'http://v.juhe.cn/toutiao/index?type='+ tab +'&key=836f59dcb6417be49dfa1fd2d9f50f77';
      http.get(url, response => {
        response.on('data', data => {
          searchResult += data;
        });
        response.on('end', () => {
          resolve(searchResult)
        })
      })
    })
  }
  search(type)
    .then(searchResult => {
      res.json(JSON.parse(searchResult))
    })
});

app.use('/api', apiRoutes);

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})


// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

// var server = app.listen(port)
server.listen(8088);
module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
