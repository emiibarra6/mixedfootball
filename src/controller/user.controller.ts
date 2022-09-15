import { login } from '../services/user.services'
import { Request, Response } from 'express';

export const LoginController = async (req: Request, res: Response) => {
    try {
      
        const foundUser = await login(req.body);
        if(!foundUser){
          res.status(404).send('User not exist');
        }
        res.status(200).send(foundUser);
      } catch (error) {
        return res.status(500).send(error);
      }
};