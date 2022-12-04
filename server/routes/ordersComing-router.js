const router = require("express").Router();

const {
  getOrderComing,
  createOrderComing,
} = require("../controllers/ordersComing-ctrl");

router.get("/", getOrderComing);
router.post("/createOrderComing", createOrderComing);

module.exports = router;
