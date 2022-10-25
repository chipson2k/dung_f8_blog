const Course = require('../models/Course');
const {
    mutipleMongooseToObject,
    mongooseToObject,
} = require('../../util/mongoose');

class SiteController {
    // [GET]/
    index(req, res) {
        Course.find({})
            // Lấy data từ DB render ra views
            .then((courses) => {
                // Gọi hàm mutipleMongooseToObject để toObject các object trong mảng
                // và return ra mảng mới có các object đã đc convert
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch((error) => next(error));
    }

    // [GET]/search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
