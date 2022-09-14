import {prop , getModelForClass} from '@typegoose/typegoose'

class User {
    @prop({required:true})
    username: string

    @prop({required:true, minlength:6})
    password: string

    @prop({required:true , trim:true})
    email:string
}
const UserModel = getModelForClass(User)
export default UserModel;