import mongoose from 'mongoose';

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/todolist", {
      useNewUrlParser: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};
module.exports = InitiateMongoServer;
