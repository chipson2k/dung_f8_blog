const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

// Add plugins
mongoose.plugin(slug);

const Courses = new Schema({
    name: { type: String, require: true },
    desc: { type: String },
    image: { type: String },
    videoId: {type: String, require: true },
    // unique: slug sẽ thay đổi nếu tồn tại slug cùng tên trong DB
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true
});


module.exports = mongoose.model('Courses', Courses);
