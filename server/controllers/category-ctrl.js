const categoryModel = require("../model/category-model");

const getCategory = async (req, res) => {
  await categoryModel.find({}).then((result, err) => {
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

const geCategoryById = async (req, res) => {
  await categoryModel
    .findById(req.params.id)
    .then((categoryId) => {
      if (categoryId) {
        return res.status(200).json({ success: true, categoryId });
      }
      return res.json({ success: false, message: "category not found" });
    })
    .catch((error) => res.status(400).json({ success: false, error }));
};

const createCategory = async (req, res) => {
  await categoryModel
    .insertMany(req.body.data)
    .then(() =>
      res.status(200).json({ success: true, message: "product added" })
    )
    .catch((error) => res.status(400).json({ success: false, error }));
};

const updateCategory = async (req, res) => {
  await categoryModel
    .findByIdAndUpdate(req.params.id, req.body.data)
    .then((result) => res.status(200).json({ success: true, result }))
    .catch((err) => res.status(400).json({ success: false, message: err }));
};
const deleteCategory = async (req, res) => {
  await categoryModel
    .findByIdAndDelete(req.params.id)
    .then(() => res.status(300).json({ success: true }))
    .catch((err) => res.status(400).json({ success: false, err }));
};

module.exports = {
  getCategory,
  geCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
};
