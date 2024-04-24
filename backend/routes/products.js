import express from "express";
import {
  createProductReview,
  deleteProduct,
  deleteReview,
  getProductReviews,
  getProducts,
  gteProductDetails,
  newProduct,
  updateProduct,
} from "../controllers/productControllers.js";
import { authorizedRoles, isAuthenticatedUser } from "../middlewares/auth.js";
const router = express.Router();

router.route("/products").get(getProducts);
router
  .route("/admin/products")
  .post(isAuthenticatedUser, authorizedRoles("admin"), newProduct);

router.route("/products/:id").get(gteProductDetails);

router
  .route("/admin/products/:id")
  .put(isAuthenticatedUser, authorizedRoles("admin"), updateProduct);
router
  .route("/admin/products/:id")
  .delete(isAuthenticatedUser, authorizedRoles("admin"), deleteProduct);
router
  .route("/reviews")
  .get(isAuthenticatedUser, getProductReviews)
  .put(isAuthenticatedUser, createProductReview);

router
  .route("/admin/reviews")
  .delete(isAuthenticatedUser, authorizedRoles("admin"), deleteReview);

export default router;
