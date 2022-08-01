import { Schema, model } from "mongoose";

const studentSchema = new Schema({
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
}, {timestamps: true});

export interface IStudent {
    name: string,
    email: string,
    password: string,
    group?: string
    attendance?: Array<Date>
}

export const StudentModel = model('student', studentSchema);