const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

// Cấu hình URL chạy function nào
// URL trong này sẽ bằng URL bên ngoài truyền vào + URL đc định nghĩa ở đây
// / (bên ngoài) + /search (định nghĩa ở đây): /search
router.use('/search', siteController.search);

// / (bên ngoài) + / (định nghĩa ở đây): /
router.use('/', siteController.index);

module.exports = router;
