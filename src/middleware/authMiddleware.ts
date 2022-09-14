import jwt from 'jsonwebtoken';
import User from '../models/user.model'
import config from 'config';
import { jwtConfig } from '../types/config.types'

const env = config.get<jwtConfig>("jwtConfig");

export const checkAuth = async (req,res,next) => {
    let token;
    //Se comprueba si existe token
    if( req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            //Separamos la primer parte del token, osea, sacamos la primer palabra que es Bearer.
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token,env.secret);

            //de esta forma creamos la session
            req.usuario = await User.findById(decoded.id).select('-password');

            return next();
        } catch (error) {
            const e = new Error ('Token is not valid or non-existent');
            return res.status(403).json({msg: e.message});
        }
    }

    if(!token){
        const error = new Error ('Token is not valid');
        res.status(403).json({msg: error.message});
    }
   
}
