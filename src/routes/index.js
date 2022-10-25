const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    // mặc định: /news sẽ vào newsRouter
    app.use('/news', newsRouter);

    // mặc định: / sẽ vào siteRouter
    app.use('/', siteRouter);
}

module.exports = route;
