const customerCtrl = require("../controllers/customerCtrl");
const router = require("express").Router();

// "/"는 api/customer와 같다.
router.route('/').get(customerCtrl.getCustomer)

module.exports = router;