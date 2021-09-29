const mongoose = require("mongoose");
const slugify = require("slugify");
const mongooseDelete = require("mongoose-delete");
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
    slug: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);
Subject.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});
Subject.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});
module.exports = mongoose.model("Subject", Subject, "subject");
