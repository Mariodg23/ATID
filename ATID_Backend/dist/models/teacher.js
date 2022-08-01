"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherModel = void 0;
const mongoose_1 = require("mongoose");
const teacherSchema = new mongoose_1.Schema({
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
    groups: [{
            type: String,
            ref: 'Group'
        }]
}, { timestamps: true });
exports.TeacherModel = (0, mongoose_1.model)('teacher', teacherSchema);
