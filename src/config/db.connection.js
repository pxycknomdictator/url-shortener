import { connect } from "mongoose";
import { _configs } from "../constants/constant.js";

export const DB_CONNECTION = async () => {
  try {
    await connect(`${_configs.db_url}/${_configs.db_name}`);
    console.log("Database connected 😃");
  } catch (error) {
    console.error(`Failed to connect Database 💔 ${error?.message}`);
  }
};
