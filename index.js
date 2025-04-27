const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const methodOverride = require("method-override");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
const ExpressError = require("./utils/ExpressError.js");
const isteRouter = require("./routes/iste.js");
app.use(function (req, res, next) {
  res.locals.currentRoute = req.path;
  next();
});
app.use("/", isteRouter);
app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page not found!"));
});
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went Wrong!" } = err;
  console.log(message);
  res.status(statusCode).render("error.ejs", { message });
});
app.listen(port, () => {
  console.log(`listening on port number : ${port}`);
});
