import JWT from "jsonwebtoken";
import { _configs } from "../constants/constant.js";

export const generate_Token = ({ _id, fullName, email }) => {
  return JWT.sign({ _id, fullName, email }, _configs.access_token_key, {
    expiresIn: _configs.access_token_expiry,
  });
};
