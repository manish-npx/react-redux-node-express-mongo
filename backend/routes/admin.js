import express from "express";
import {
  logoutUser,
  getUserProfile,
  updateUserProfile,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/users/index.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();
router.use("/", [protect, admin], (req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.post("/logout", logoutUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default router;
