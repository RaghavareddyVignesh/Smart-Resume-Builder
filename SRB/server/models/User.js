import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  name: { type: String },
});

const User = mongoose.model('User', UserSchema);

export default User; // ✅ default export required for ES Modules