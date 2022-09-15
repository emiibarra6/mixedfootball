import {prop , getModelForClass} from '@typegoose/typegoose'

class users {

    @prop({required:true})
    username: string

    @prop({required:true, minlength:6})
    password: string

    @prop({required:true , trim:true})
    email:string

}
const UserModel = getModelForClass(users)
export default UserModel;