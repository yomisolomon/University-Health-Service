const mongoose = require("mongoose");

async function connectDB() {
  try {
    // Add your database URL here EXAMPLE
    // return await mongoose.connect(
    //   "mongodb+srv://trey:treysteve@main-03xkr.mongodb.net/main"
    // );
    // return await mongoose.connect(
    //   "mongodb+srv://trey:treysteve@cluster0.wuabtba.mongodb.net/?retryWrites=true&w=majority"
    // );
    return await mongoose.connect("mongodb://localhost:27017/hospital");
  } catch (error) {
    console.log("error", error);
  }
}

module.exports = connectDB;
