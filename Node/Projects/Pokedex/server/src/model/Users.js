import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true, trim: true},
    password: {type: String, required: true, minlength: 8},
})

const UserModel = mongoose.model('users', UserSchema)

export default UserModel