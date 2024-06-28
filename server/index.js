import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { dataBaseConnection } from "./db/connection.js";
import { customerRouter } from "./routes/customer.js";

const app = express();
const PORT = 9000;
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
dataBaseConnection();
app.use("/api/v1/customer", customerRouter);
app.listen(PORT, () => {
  console.log(`SERVER IS CONNECTED TO PORT ${PORT}`);
});
