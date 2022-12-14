const ordersModel = require("../model/orders-model");

const getOrders = async (req, res) => {
  await ordersModel.find({}).then((result, err) => {
    if (err) {
      return res.status(400).json({ success: false, message: err });
    }
    if (result.length == 0) {
      return res.json({ success: false, message: "no data" });
    }
    if (result) {
      return res.status(200).json({ success: true, message: result });
    }
  });
};

const geOrdersById = async (req, res) => {
  await ordersModel
    .findById(req.params.id)
    .then((OrdersId) => {
      if (OrdersId) {
        return res.status(200).json({ success: true, OrdersId });
      }
      return res.json({ success: false, message: "Orders not found" });
    })
    .catch((error) => res.status(400).json({ success: false, error }));
};

const createOrders = async (req, res) => {
  await ordersModel
    .insertMany(req.body.data)
    .then(() =>
      res.status(200).json({ success: true, message: "Orders added" })
    )
    .catch((error) => res.status(400).json({ success: false, error }));
};

const updateOrders = async (req, res) => {
  await ordersModel
    .findByIdAndUpdate(req.params.id, req.body.data)
    .then((result) => res.status(200).json({ success: true, result }))
    .catch((err) => res.status(400).json({ success: false, message: err }));
};
const deleteOrders = async (req, res) => {
  await ordersModel
    .findByIdAndDelete(req.params.id)
    .then(() => res.status(300).json({ success: true }))
    .catch((err) => res.status(400).json({ success: false, err }));
};

module.exports = {
  getOrders,
  geOrdersById,
  createOrders,
  updateOrders,
  deleteOrders,
};
