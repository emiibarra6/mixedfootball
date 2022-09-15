import { Router , Application } from "express";
import user from "./user.routes";

function apiRoute(app: Application){
    const router = Router();
    app.use('/api/v1', router);
    router.use('/user' , user);
}

export default apiRoute;