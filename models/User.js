import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  photo: String,
});

export default mongoose.models.User || mongoose.model("User", userSchema);