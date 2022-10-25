const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

// Cấu hình URL chạy function nào
// URL trong này sẽ bằng URL bên ngoài truyền vào + URL đc định nghĩa ở đây
// /news (bên ngoài) + /:slug (định nghĩa ở đây): /news/:slug
// :slug => giá trị ngẫu nhiên
router.use('/:slug', newsController.show);

// /news (bên ngoài) + / (định nghĩa ở đây): /news
router.use('/', newsController.index);

module.exports = router;
