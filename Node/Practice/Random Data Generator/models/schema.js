import mongoose from 'mongoose';

const trialSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  hasPP: Boolean,
});

const Schema = mongoose.model("Schema", trialSchema);

export default Schema;
