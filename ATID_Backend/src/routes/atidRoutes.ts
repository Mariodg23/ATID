import { Router, Request, Response } from "express";
import bcrypt from 'bcrypt';
import { TeacherModel } from "../models/teacher";
import { StudentModel } from "../models/student";
import Token from '../classes/token';

const atidRoutes = Router();

atidRoutes.get('/', (req, res) => {
    res.send(process.env.SECRET_KEY);
})

atidRoutes.post('/createTeacher', (req: Request, res: Response)=>{
    const teacher = {
        name: req.body.name || '',
        group: req.body.group || '',
        email: req.body.email || '',
        password: bcrypt.hashSync(req.body.password, 20) || ''
    }

    TeacherModel.create(teacher).then(userDB =>{
        var teacherToken = Token.getJsonWebToken({
            _id: userDB._id,
            name: req.body.name,
            group: req.body.group,
            email: req.body.email
        })

        res.status(200).json({
            ok: true,
            token: teacherToken
        })
    }).catch(err=>{
        res.status(400).json({
            ok: false,
            err
        });
    })
});

atidRoutes.post('/createStudent', (req: Request, res: Response)=>{
    const teacher = {
        name: req.body.name || '',
        group: req.body.group || '',
        email: req.body.email || '',
        password: bcrypt.hashSync(req.body.password, 20) || ''
    }

    TeacherModel.create(teacher).then(userDB =>{
        var teacherToken = Token.getJsonWebToken({
            _id: userDB._id,
            name: req.body.name,
            group: req.body.group,
            email: req.body.email
        })

        res.status(200).json({
            ok: true,
            token: teacherToken
        })
    }).catch(err=>{
        res.status(400).json({
            ok: false,
            err
        });
    })
});

export default atidRoutes;