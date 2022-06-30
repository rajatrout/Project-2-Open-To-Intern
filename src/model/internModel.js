const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const internSchema = new mongoose.Schema({


    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    collegeId: {
        type: ObjectId,
        ref: "Colleges"
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    deletedAt: Date


}, { timestamps: false, versionKey: false });

module.exports = mongoose.model('Interns', internSchema);