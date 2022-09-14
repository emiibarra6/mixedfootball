import {prop , getModelForClass} from '@typegoose/typegoose'

class User {
    @prop()
    username: string

    @prop()
    password: string

    @prop()
    email:string
}
const UserModel = getModelForClass(User)
export default UserModel;