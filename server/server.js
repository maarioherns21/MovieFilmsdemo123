import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

import routerIndex from "./routes/index.js";
import routerUser from "./routes/users.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ extended: true, limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));

app.use(cors());

app.use("/api/movies", routerIndex);
app.use("/api/users", routerUser);

const PORT = process.env.PORT || 4000;
mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`express is listening in PORT ${PORT}`);
    })
  )
  .catch((error) => {
    console.log(error.message);
  });
