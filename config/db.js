const mongoose = require("mongoose");
const colors = require("colors");
//function mmongodb dfatabase connection
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECT);
    console.log(`Connected To Database`);
  } catch (error) {
    console.log("DB Error", error);
  }
};
module.exports = connectDb;
