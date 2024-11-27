import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema({
  base64: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },  
  description: {
    type: String,
    required: false
  }
})

const Profile = mongoose.models.Profile || mongoose.model('Profile', profileSchema)

export default Profile
