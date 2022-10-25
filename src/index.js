const path = require('path');
// import express
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const db = require('./config/db');

// create object
const app = express();
const port = 8000;

// Connect DB
db.connect();

const route = require('./routes');

// Get các file tĩnh (static files) trong public (đối số t2) ra view bằng url
// (http://localhost:8000/img/logo.png)
app.use(express.static(path.join(__dirname, 'public')));

// đọc dữ liệu client lên server lưu vào body
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// HTTP Logger
app.use(morgan('combined'));

//Template engine
app.engine(
    'hbs',
    handlebars.engine({
        // Đổi đuôi file
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
// __dirname: trả về thư mục chứa file đang chạy
// (D:\visual studio code\Node-Express\blog\src)
app.set('views', path.join(__dirname, 'resources/views'));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
