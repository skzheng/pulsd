const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const requestHandler = require('./requestHandlers.js')
const bodyParser = require('body-parser');

const app = express();
 
const compiler = webpack(webpackConfig);
 
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));
 
// API Requests
app.get('/events', requestHandler.getEvents);

app.post('/events', requestHandler.postEvents);

const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});