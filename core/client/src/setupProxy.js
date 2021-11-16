const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/',
        createProxyMiddleware({
            target: '3.36.208.126:5000',
            changeOrigin: true,
        })
    )
}