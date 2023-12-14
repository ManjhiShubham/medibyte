const path = require("path");
const rootDir = path.dirname(require.main.filename);
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

require("dotenv").config();

const saltRounds = 10;

const hashPassword = async function (password) {
  return await bcrypt.hash(password, saltRounds);
};

const generateToken = function (id, email) {
  return jwt.sign({ userId: id, email }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

const checkUser = async function (password, hash) {
  return new Promise((resolve, reject) => {
    resolve(bcrypt.compare(password, hash));
  });
};

module.exports.signUp = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "register.html"));
};

module.exports.login = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "login.html"));
};

module.exports.logout = (req, res, next) => {
  res.status(200).json({ message: "successfully logged out" });
};

module.exports.newUser = async (req, res, next) => {
  try {
    const password = req.body.password;
    const hashedPassword = await hashPassword(password);
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    if (newUser instanceof User) {
      res.status(200).redirect("/users/login");
    }
  } catch (err) {
    res.status(409).json({ status: 409, message: err });
  }
};

module.exports.loginUser = async (req, res, next) => {
  try {
    let userId;
    let verifiedUser;
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({ email: email }).exec();
    let userFound;
    if (Object.entries(user).length > 0) {
      verifiedUser = user;
      userFound = await checkUser(password, verifiedUser.password);
    } else {
      res.status(404).json({ status: 404, message: "User not found" });
    }

    if (userFound) {
      res.status(200).json({
        status: 200,
        message: "Successfully logged in",
        token: generateToken(verifiedUser.id, verifiedUser.email),
      });
    } else {
      res.status(401).json({ status: 401, message: "User not authorized" });
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
