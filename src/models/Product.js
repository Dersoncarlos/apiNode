const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description : {
        type: String,
        require: true
    },
    url: {
        type: String,
        require: true
    },
    createdAt:{
        type: Date,
        dafault: Date.now,
    },
});

mongoose.model('Product', ProductSchema);