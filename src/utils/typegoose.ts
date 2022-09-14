import {connect} from "mongoose";
import logger from "./logger";
import config from 'config';
import { dbMongoUrl } from '../types/config.types'

const env = config.get<dbMongoUrl>("mongodb");


export async function connectDBMongo() {
    try {
        const db = await connect(env.url)
        logger.debug.info("Mongo connected to: "  , db.connection.db.databaseName); 
    } catch (error) {
        logger.file.error("Connection failed", error);
    }
}