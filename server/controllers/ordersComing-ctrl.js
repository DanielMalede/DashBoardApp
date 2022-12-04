const ordersComingModel = require("../model/ordersComing-model");
const getOrderComing = async (req, res) => {
  await ordersComingModel.find({}).then((result, err) => {
    if (err) {
      return res.status(400).json({ success: false, message: err });
    }
    if (result.length == 0) {
      return res.json({ success: false, message: "no orders" });
    }
    return res.status(200).json({ success: true, message: result });
  });
};

const createOrderComing = async (req, res) => {
  await ordersComingModel
    .insertMany(req.body.data)
    .then(() => res.status(200).json({ success: true, message: "order added" }))
    .catch((error) => res.status(400).json({ success: false, error }));
};

module.exports = {
  getOrderComing,
  createOrderComing,
};
