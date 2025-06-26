import mongoose from 'mongoose';

const entitySchema = new mongoose.Schema({
  name: String,
  pan: String,
  admin: String,
  status: String,
  createdBy: String,
  createdOn: String,
});

export default mongoose.models.Entity || mongoose.model('Entity', entitySchema);
