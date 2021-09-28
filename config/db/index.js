const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/subjects", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected DB 🥰");
  } catch (error) {
    console.log("Error 🤬 " + error);
  }
}
// module.exports = { connect };
module.exports = { connect };
