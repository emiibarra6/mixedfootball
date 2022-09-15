import { DocumentDefinition } from 'mongoose';
import UserModel from '../models/user/user.model';
import {User} from '../models/user/interfaces/user.interface'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import config from 'config';
import { jwtConfig } from '../types/config.types'

const env = config.get<jwtConfig>("jwtConfig");

export async function login(user: DocumentDefinition<User>) {
    try {
      const { username , password  } = user;
      const foundUser = await UserModel.findOne( { username } );
      console.log(foundUser)
      if (!foundUser) {
        throw new Error('Name of user is not correct');
      }
   
      const isMatch = bcrypt.compareSync( password, foundUser.password);
   
      if (isMatch) {
        const token = jwt.sign({ _id: foundUser._id?.toString(), username: foundUser.username }, env.secret, {
          expiresIn: '2 days',
        });
   
        return { user, token };
      } else {
        throw new Error('Password is not correct');
      }
    } catch (error) {
      throw error;
    }
   }