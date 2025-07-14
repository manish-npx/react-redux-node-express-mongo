import express from "express";
const router = express.Router();

import { registerUser, authUser } from "../controllers/users/index.js";

router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.post("/register", registerUser);
router.post("/login", authUser);

export default router;
