import express, { urlencoded, json } from "express";
import path from "path";
import { _configs } from "./constants/constant.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/user.route.js";
import urlRouter from "./routes/url.route.js";
import { DB_CONNECTION } from "./config/db.connection.js";

const app = express();
const PORT = _configs.port || 8000;

// Database connection
DB_CONNECTION()
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Started at http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log("Error", error?.message));

// Json parsers || Middlewares
app.use(urlencoded({ extended: false, limit: "20kb" }));
app.use(json({ limit: "20kb" }));
app.use(cookieParser());

// configuration template engine ejs
app.set("view engine", "ejs");
app.set("views", path.resolve("./src/views"));

// auth routes
app.use("/auth", authRouter);
app.use("/", urlRouter);
