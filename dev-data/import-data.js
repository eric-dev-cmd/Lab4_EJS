const db = require("../config/db/index");
const fs = require("fs");
const Subject = require("../models/Subject");

db.connect();

/**
 * TODO: READ FILE JSON
 * node .\dev-data\data\import-data.js --import
 */
const subjects = JSON.parse(
  fs.readFileSync(`${__dirname}\\data.json`, "utf-8")
);
const importData = async () => {
  try {
    await Subject.create(subjects);
    console.log("Data loaded 😍");
    process.exit();
  } catch (error) {
    console.log(error);
  }
};
const deleteData = async () => {
  try {
    await Subject.deleteMany();
    console.log("Deleted data 😥");
    process.exit();
  } catch (error) {
    console.log(error);
  }
};
if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
/**
 * TODO: IMPORT DATA TO DB
 */
// run script [ node .\import-data.js --import/--delete]
console.log(process.argv);
//node .\import-data.js --delete
//node .\import-data.js --import
