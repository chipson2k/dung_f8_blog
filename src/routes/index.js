const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');

function route(app) {
    // mặc định: /news sẽ vào newsRouter
    app.use('/news', newsRouter);

    // mặc định: /courses sẽ vào coursesRouter
    app.use('/courses', coursesRouter);

    // mặc định: / sẽ vào siteRouter
    app.use('/', siteRouter);

    
}

module.exports = route;
