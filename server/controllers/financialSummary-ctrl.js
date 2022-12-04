const financialSummaryModel = require("../model/financialSummary-model");

const getFinancialSummary = async (req, res) => {
  await financialSummaryModel.find({}).then((result, err) => {
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

const geFinancialSummaryById = async (req, res) => {
  await financialSummaryModel
    .findById(req.params.id)
    .then((financialSummaryId) => {
      if (financialSummaryId) {
        return res.status(200).json({ success: true, financialSummaryId });
      }
      return res.json({ success: false, message: "financial Summary not found" });
    })
    .catch((error) => res.status(400).json({ success: false, error }));
};

const createFinancialSummary = async (req, res) => {
  await financialSummaryModel
    .insertMany(req.body.data)
    .then(() =>
      res.status(200).json({ success: true, message: "financial Summary added" })
    )
    .catch((error) => res.status(400).json({ success: false, error }));
};

const updateFinancialSummary = async (req, res) => {
  await financialSummaryModel
    .findByIdAndUpdate(req.params.id, req.body.data)
    .then((result) => res.status(200).json({ success: true, result }))
    .catch((err) => res.status(400).json({ success: false, message: err }));
};
const deleteFinancialSummary = async (req, res) => {
  await financialSummaryModel
    .findByIdAndDelete(req.params.id)
    .then(() => res.status(300).json({ success: true }))
    .catch((err) => res.status(400).json({ success: false, err }));
};

module.exports = {
  getFinancialSummary,
  geFinancialSummaryById,
  createFinancialSummary,
  updateFinancialSummary,
  deleteFinancialSummary
};
