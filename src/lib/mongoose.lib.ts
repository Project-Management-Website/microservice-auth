import mongoose from 'mongoose';
import * as dotenv from 'dotenv'

function connect() {
  dotenv.config();

  return mongoose.connect(
    `${process.env.MONGODB_URI}/${process.env.DB_NAME}`,
    {
        retryWrites: true,
        w: 'majority',
        authSource: 'admin',
        maxPoolSize: 50,
        minPoolSize: 10,
    }
  );
}

export default {
  connect,
};
