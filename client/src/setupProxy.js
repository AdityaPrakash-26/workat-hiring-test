const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: '127.0.0.1',
            changeOrigin: true,
        })
    );
};