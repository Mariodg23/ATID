"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bcrypt_1 = __importDefault(require("bcrypt"));
const teacher_1 = require("../models/teacher");
const token_1 = __importDefault(require("../classes/token"));
const atidRoutes = (0, express_1.Router)();
atidRoutes.get('/', (req, res) => {
    res.send(process.env.SECRET_KEY);
});
atidRoutes.post('/createTeacher', (req, res) => {
    const teacher = {
        name: req.body.name || '',
        group: req.body.group || '',
        email: req.body.email || '',
        password: bcrypt_1.default.hashSync(req.body.password, 20) || ''
    };
    teacher_1.TeacherModel.create(teacher).then(userDB => {
        var teacherToken = token_1.default.getJsonWebToken({
            _id: userDB._id,
            name: req.body.name,
            group: req.body.group,
            email: req.body.email
        });
        res.status(200).json({
            ok: true,
            token: teacherToken
        });
    }).catch(err => {
        res.status(400).json({
            ok: false,
            err
        });
    });
});
atidRoutes.post('/createStudent', (req, res) => {
    const teacher = {
        name: req.body.name || '',
        group: req.body.group || '',
        email: req.body.email || '',
        password: bcrypt_1.default.hashSync(req.body.password, 20) || ''
    };
    teacher_1.TeacherModel.create(teacher).then(userDB => {
        var teacherToken = token_1.default.getJsonWebToken({
            _id: userDB._id,
            name: req.body.name,
            group: req.body.group,
            email: req.body.email
        });
        res.status(200).json({
            ok: true,
            token: teacherToken
        });
    }).catch(err => {
        res.status(400).json({
            ok: false,
            err
        });
    });
});
exports.default = atidRoutes;
