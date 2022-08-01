"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModel = void 0;
const mongoose_1 = require("mongoose");
const studentSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'The name is obligatory']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'The email is obligatory']
    },
    password: { type: String },
    group: { type: String },
    attendance: [{
            date: Date.now()
        }]
}, { timestamps: true });
exports.StudentModel = (0, mongoose_1.model)('student', studentSchema);
