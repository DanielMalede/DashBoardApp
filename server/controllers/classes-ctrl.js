const classesModel = require("../model/classes-model");

const getClasses = async (req, res) => {
  await classesModel.find({}).then((result, err) => {
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

const geClassesById = async (req, res) => {
  await classesModel
    .findById(req.params.id)
    .then((classesId) => {
      if (classesId) {
        return res.status(200).json({ success: true, classesId });
      }
      return res.json({ success: false, message: "classes not found" });
    })
    .catch((error) => res.status(400).json({ success: false, error }));
};

const createClasses = async (req, res) => {
  await classesModel
    .insertMany(req.body.data)
    .then(() =>
      res.status(200).json({ success: true, message: "classes added" })
    )
    .catch((error) => res.status(400).json({ success: false, error }));
};

const updateClasses = async (req, res) => {
  await classesModel
    .findByIdAndUpdate(req.params.id, req.body.data)
    .then((result) => res.status(200).json({ success: true, result }))
    .catch((err) => res.status(400).json({ success: false, message: err }));
};
const deleteClasses = async (req, res) => {
  await classesModel
    .findByIdAndDelete(req.params.id)
    .then(() => res.status(300).json({ success: true }))
    .catch((err) => res.status(400).json({ success: false, err }));
};

module.exports = {
  getClasses,
  geClassesById,
  createClasses,
  updateClasses,
  deleteClasses,
};
