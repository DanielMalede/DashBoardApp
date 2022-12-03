const infoPagesModel = require("../model/infoPages-model");

const getInfoPages = async (req, res) => {
  await infoPagesModel.find({}).then((result, err) => {
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

const geInfoPagesById = async (req, res) => {
  await infoPagesModel
    .findById(req.params.id)
    .then((InfoPagesId) => {
      if (InfoPagesId) {
        return res.status(200).json({ success: true, InfoPagesId });
      }
      return res.json({ success: false, message: "InfoPages not found" });
    })
    .catch((error) => res.status(400).json({ success: false, error }));
};

const createInfoPages = async (req, res) => {
  await infoPagesModel
    .insertMany(req.body.data)
    .then(() =>
      res.status(200).json({ success: true, message: "InfoPages added" })
    )
    .catch((error) => res.status(400).json({ success: false, error }));
};

const updateInfoPages = async (req, res) => {
  await infoPagesModel
    .findByIdAndUpdate(req.params.id, req.body.data)
    .then((result) => res.status(200).json({ success: true, result }))
    .catch((err) => res.status(400).json({ success: false, message: err }));
};
const deleteInfoPages = async (req, res) => {
  await infoPagesModel
    .findByIdAndDelete(req.params.id)
    .then(() => res.status(300).json({ success: true }))
    .catch((err) => res.status(400).json({ success: false, err }));
};

module.exports = {
  getInfoPages,
  geInfoPagesById,
  createInfoPages,
  updateInfoPages,
  deleteInfoPages,
};
