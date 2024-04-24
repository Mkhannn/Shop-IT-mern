import express from "express";
import {
  allUsers,
  deleteUser,
  forgotPassword,
  getUserDetails,
  getUserProfile,
  loginUser,
  logout,
  registerUser,
  resetPassword,
  updatePassword,
  updateProfile,
  updateUser,
  uploadAvatar,
} from "../controllers/authControllers.js";
import { authorizedRoles, isAuthenticatedUser } from "../middlewares/auth.js";
const router = express.Router();

router.route("/register").post(registerUser); // register user
router.route("/login").post(loginUser); // login user
router.route("/logout").get(logout); // logout user

router.route("/password/forgot").post(forgotPassword); //forgot user route pswrd
router.route("/password/reset/:token").put(resetPassword); // reset paswrd route

router.route("/me").get(isAuthenticatedUser, getUserProfile); // get current user profile
router.route("/me/update").put(isAuthenticatedUser, updateProfile); // update current user profile
router.route("/password/update").put(isAuthenticatedUser, updatePassword); // update current user pswrd route
router.route("/me/upload_avatar").put(isAuthenticatedUser, uploadAvatar);

router
  .route("/admin/users")
  .get(isAuthenticatedUser, authorizedRoles("admin"), allUsers);
router
  .route("/admin/users/:id")
  .get(isAuthenticatedUser, authorizedRoles("admin"), getUserDetails)
  .put(isAuthenticatedUser, authorizedRoles("admin"), updateUser)
  .delete(isAuthenticatedUser, authorizedRoles("admin"), deleteUser);

export default router;
