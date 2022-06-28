const router = require("express").Router();
const ctrl = require("../controllers/controller");

// "/"는 /api를 갖고있다.
router.get("/", (req, res) => {
  res.send("hi");
});

router.post("/putCustomerInfo",ctrl.post.postCustomerInfo);

module.exports = router;
