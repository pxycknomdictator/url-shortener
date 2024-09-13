import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const _configs = {
  db_name: process.env.DB_NAME,
  db_url: process.env.DB_URL,
  port: process.env.PORT,
  access_token_key: process.env.ACCESS_TOKEN_SECRET_KEY,
};

export { _configs };
