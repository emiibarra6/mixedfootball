import jwt from "jsonwebtoken";
import logger from "./logger";
import config from 'config';
import { jwtConfig } from '../types/config.types'


const env = config.get<jwtConfig>("jwtConfig");

export const generarJWT = (id: string) => {
    try {
        return jwt.sign({ id } , env.secret, {
            expiresIn: "1h",
         })       
    } catch (error) {
        logger.file.error("JSONWEBTOKEN error: ", error);
    }
 
}