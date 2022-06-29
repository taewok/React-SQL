const router = require("express").Router();
const ctrl = require("../controllers/controller");

// "/"는 /api를 갖고있다.
router.get("/", (req, res) => {
  res.send("hi");
});

module.exports = router;
