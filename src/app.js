const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 8000; // means the PORT number you manually set. 3000 is the default port . If you havent set it manually then it will listen to 3000.

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs"); // we are using hbs as a view engine
app.set("views", template_path); // setting default path as template path
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

// Routes
app.get("", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("*", (req, res) => {
  res.render("errorPage", {
    errorMsg: "404 Error !!! Page Not Exist ",
  }); 
});

app.listen(port, () => {
  console.log(`Listening from the port ${port}`);
});
