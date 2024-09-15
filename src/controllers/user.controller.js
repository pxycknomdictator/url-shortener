import { User } from "../models/user.model.js";
import { validateUserInformation } from "../middlewares/user.validate.middleware.js";
import {
  hash_password,
  decrypt_password,
} from "../middlewares/password.middleware.js";
import { generate_Token } from "../middlewares/authenticate.middleware.js";

const handleShowRegisterPage = (req, res) => {
  res.status(200).render("register");
};

const handleShowLoginPage = (req, res) => {
  res.status(200).render("login");
};

const handleRegisterNewUser = async (req, res) => {
  try {
    const validate = await validateUserInformation(req.body);
    if (validate.password === undefined) {
      return res.json(validate);
    }
    const hash = await hash_password(validate.password);
    const newUser = await User.create({
      fullName: validate.fullName,
      email: validate.email,
      password: hash,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(401).send(`${error}`);
  }
};

const handleLoginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const isExist = await User.findOne({ email });
    if (!isExist || !(await decrypt_password(password, isExist.password))) {
      return res.status(401).json({ error: "Something went wrong" });
    }
    const token = generate_Token(isExist);
    res.status(200).cookie("Token", token).json(isExist);
  } catch (error) {
    res.status(401).json({ error: `Error ${error?.message}` });
  }
};

const handleLogoutUser = async (req, res) => {
  try {
    res.status(201).json({ message: "Logout User" });
  } catch (error) {
    res.status(401).json({ error: `Error ${error?.message}` });
  }
};

export {
  handleShowRegisterPage,
  handleShowLoginPage,
  handleRegisterNewUser,
  handleLoginUser,
  handleLogoutUser,
};
