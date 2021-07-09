const express = require("express");
const app = express();
const cors = require("cors");
const SavedQuestion = require("./api/SavedQuestion");
const typeOne = require("./api/typeOne");
const typeTwo = require("./api/typeTwo");
const user = require("./api/user");
app.use(cors());
app.use(express.json());

app.use(express.static("./build"));
app.get("/", (req, res) => {
  return res.sendFile("index.html");
});

app.use("/typeOne", typeOne);
app.use("/typeTwo", typeTwo);
app.use("/savedquestion", SavedQuestion);
app.use("/user", user);
app.listen(3001, () => {
  console.log("Listening on port 3001!");
});
