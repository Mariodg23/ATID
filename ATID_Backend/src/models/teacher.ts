import { Schema, model } from "mongoose";

const teacherSchema = new Schema({
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
}, {timestamps: true});


export interface ITeacher {
    name: string,
    email: string,
    password: string,
    groups?: Array<String>
}

export const TeacherModel = model('teacher', teacherSchema);