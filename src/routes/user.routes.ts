import { Router } from 'express'
import { LoginController } from '../controller/user.controller'


const route = Router()

// Loggea
route.post('/login', LoginController);

export default route
