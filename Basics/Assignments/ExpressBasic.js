const express = require("express");

const app = express();

// app.use("/", (req, res, next) => {
//   console.log("This middleware is working fine");
//   next();
// });

// app.use("/", (req, res, next) => {
//   console.log("Another middleware that is working just fine");
//   res.send("<h1>Welcome to the home page</h1>");
// });

app.use("/users", (req, res, next) => {
  res.send("<h1>You are in the users section</h1>");
});

app.use("/", (req, res, next) => {
  res.send("<h1>This is the dashboard</h1>");
});
app.listen(3000);
