import { CategoryController } from "@/controllers";
import { AuthMiddleware } from "@/middlewares/auth-verify";
import { Router } from "express";

export default (
  categoryController: CategoryController,
  authMiddleware: AuthMiddleware
) => {
  const router = Router();

  // router.post(
  //   "/",
  //   authMiddleware.middleware.bind(authMiddleware),
  //   categoryController.createCategory.bind(categoryController)
  // );

  router.get("/", categoryController.getCategories.bind(categoryController));

  return router;
};
