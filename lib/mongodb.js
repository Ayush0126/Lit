import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://127.0.0.1:27017/lit_dashboard';

if (!global._mongoose) {
  global._mongoose = mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export default global._mongoose;
