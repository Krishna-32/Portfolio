import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
  base64: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
})

const Post = mongoose.models.Post || mongoose.model('Post', postSchema)

export default Post
