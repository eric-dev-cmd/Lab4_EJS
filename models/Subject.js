const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Subject = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    subjectType: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Subject", Subject, "subject");
