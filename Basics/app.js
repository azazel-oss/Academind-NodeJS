const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const rootDir = require("./util/path");

const app = express();
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

// app.use("/", (req, res, next) => {
//   console.log("This always runs");
//   next();
// });

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRouter);
app.use(shopRouter);

app.use("/", (req, res, next) => {
  console.log(rootDir);
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000);
