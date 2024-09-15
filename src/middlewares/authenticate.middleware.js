import JWT from "jsonwebtoken";
import { _configs } from "../constants/constant.js";

const generate_Token = ({ _id, fullName, email }) => {
  return JWT.sign({ _id, fullName, email }, _configs.access_token_key, {
    expiresIn: _configs.access_token_expiry,
  });
};

const decode_Token = (req, res, next) => {
  const cookie = req.cookies.Token;
  if (cookie === undefined) {
    return res.status(401).json({ msg: "Please Login first" });
  }
  const userData = JWT.verify(cookie, _configs.access_token_key);
  req.user = userData;
  next();
};

export { generate_Token, decode_Token };
