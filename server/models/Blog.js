const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cover_image: {
        type: String
    },
    category_id: {
        type: String,
        required: true
    }
});

module.exports = Blog = mongoose.model("blogs", BlogSchema);
