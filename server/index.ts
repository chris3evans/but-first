const Express = require("express");
const app = Express();
const cors = require("cors");
const PORT = 4000;
const Router = require("./router.ts");
const Mongoose = require("mongoose");

const path = require("path");

require("dotenv").config({
  path: "../.env",
});

app.use(Express.json());
app.use(cors());
app.use(Router);

(async () => {
  await Mongoose.connect(process.env.DB_URI);
  console.log("Mongoose connection to database established 📗📗📗");

  app.listen(PORT, () => {
    console.log(`Express server is running on port ${PORT} ✅✅✅`);
  });
})();
