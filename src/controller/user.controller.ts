import { login } from '../services/user.services'
import { Request, Response } from 'express';

export const LoginController = async (req: Request, res: Response) => {
    try {
        const foundUser = await login(req.body);
        //console.log('found user', foundUser.token);
        res.status(200).send(foundUser);
      } catch (error) {
        return res.status(500).send(error);
      }
};