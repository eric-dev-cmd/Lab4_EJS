const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/Subjects", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected DB 🥰");
  } catch (error) {
    console.log("Error 🤬 " + error);
  }
}
module.exports = { connect };
