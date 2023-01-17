const Express = require("express");
const app = Express();
const cors = require("cors");
const PORT = 3000;
const Router = require("./router.ts");

app.use(Express.json());
app.use(cors());
app.use(Router);

app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT} ✅✅✅`);
});
