import express from "express";

import {
  addCustomer,
  getCustomer,
  getCustomerById,
  deleteCustomer,
  updateCustomer,
  searchCustomer,
} from "../controllers/customer.js";

export const customerRouter = express.Router();
customerRouter.post("/", addCustomer);
customerRouter.get("/", getCustomer);
customerRouter.get("/:id", getCustomerById);
customerRouter.delete("/:id", deleteCustomer);
customerRouter.put("/:id", updateCustomer);
