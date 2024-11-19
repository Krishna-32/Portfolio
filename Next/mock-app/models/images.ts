import mongoose from 'mongoose'

const imageSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true
  },
  extension: {
    type: String,
    required: true
  },
  base64: {
    type: String,
    required: true
  }
})

const Image = mongoose.models.Image || mongoose.model('Image', imageSchema)

export default Image
