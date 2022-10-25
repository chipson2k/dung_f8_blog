module.exports = {
    mutipleMongooseToObject: function (mongooses) {
        // return mongooses là mảng nhận các mongoose của mongooses cũ
        // đc convert sang Object thông thường
        // (object constructor => object literal)
        return mongooses.map((mongoose) => mongoose.toObject());
    },
    mongooseToObject: function (mongoose) {
        // mongoose có tồn tại (true)
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
