import Jwt from 'jsonwebtoken';

export default class Token {

    private static seed: string = 'AttendanceID';
    private static expiration: string = '30d';

    constructor() { }

    static getJsonWebToken(payload: any): string {
        return Jwt.sign(
            { usuario: payload },
            this.seed,
            { expiresIn: this.expiration }
        );
    }
    
    static verifyToken(userToken: string) {
        return new Promise((resolve, reject) => {
            Jwt.verify(
                userToken,
                this.seed,
                (err, decoded) => {
                    if (err) {
                        reject();
                    } else {
                        resolve(decoded);
                    }
                }
            )
        });
    }
}