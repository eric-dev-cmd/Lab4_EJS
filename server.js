const PORT = 3000;

const app = require("./app");

const db = require("./config/db/index");

db.connect();

app.listen(PORT, () => {
  console.log(`Server on port: ${PORT}`);
});
