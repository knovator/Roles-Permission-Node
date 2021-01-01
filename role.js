const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true,
        uppercase: true
    }
});
exports.Role = mongoose.model('Role', schema);