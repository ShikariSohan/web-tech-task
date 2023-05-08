const express = require("express");
const router = express.Router();

router.get("/wiki", function (req, res, next) {
  res.send("wiki home page");
});
router.get("/about", function (req, res, next) {
  res.send("About this wiki");
});

router.get("/students", function (req, res, next) {
  res.send(
    "List of students :\n 1.Sohan (2018331068) \n 2. Owishi (2018331022)\n"
  );
});
router.get("/time", function (req, res, next) {
  const now = new Date();
  const day = now.toLocaleString("en-US", { day: "2-digit" });
  const month = now.toLocaleString("en-US", { month: "2-digit" });
  const year = now.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  res.send("Current date is : " + formattedDate);
});
module.exports = router;
