const registersModel = require("../model/registersUsers-model");

const getUsers = async (req, res) => {
  await registersModel.find({}).then((result, err) => {
    if (err) {
      return res.status(400).json({ success: false, message: err });
    }
    if (result.length == 0) {
      return res.json({ success: false, message: "no users" });
    }
    if (result) {
      return res.status(200).json({ success: true, message: result });
    }
  });
};

const getUsersById = async (req, res) => {
  await registersModel
    .findById(req.params.id)
    .then((usersID) => {
      if (usersID) {
        return res.status(200).json({ success: true, usersID });
      }
      return res.json({ success: false, message: "user not found" });
    })
    .catch((error) => res.status(400).json({ success: false, error }));
};

const createUser = async (req, res) => {
  await registersModel
    .insertMany(req.body.data)
    .then(() => res.status(200).json({ success: true, message: "user added" }))
    .catch((error) => res.status(400).json({ success: false, error }));
};

const updateUser = async (req, res) => {
  await registersModel
    .findByIdAndUpdate(req.params.id, req.body.data)
    .then((result) => res.status(200).json({ success: true, result }))
    .catch((err) => res.status(400).json({ success: false, message: err }));
};
const deleteUser = async (req, res) => {
  await registersModel
    .findByIdAndDelete(req.params.id)
    .then(() => res.status(300).json({ success: true }))
    .catch((err) => res.status(400).json({ success: false, err }));
};

module.exports = {
  getUsers,
  getUsersById,
  createUser,
  updateUser,
  deleteUser,
};
