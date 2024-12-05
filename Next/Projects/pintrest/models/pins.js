import mongoose from "mongoose";

const pinSchema = new mongoose.Schema({
    user: {
     String,
     ref: 'User',
     required: true,
    },
    title: {
     type: String,
     required: true,
     trim: true,
    },
    description: {
     type: String,
     required: true,
     trim: true,
    },
    tags: [
     {
      type: String,
      trim: true,
     },
    ],
    image: {
     url: String,
    },
    likes: [
     {
      user: String,
     }
    ],
    comments: [
     {
      user: String,
      profileImage: String,
      commentedOn: {
        type: Date,
        default: Date.now,
      }
     }
    ]

},
{timestamps: true}
);

export default mongoose.models.Pin || mongoose.model("Pin", pinSchema);

