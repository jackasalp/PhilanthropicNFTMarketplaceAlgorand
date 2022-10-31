import { UserController } from "@/controllers";
import { AuthMiddleware } from "@/middlewares/auth-verify";
import { Router } from "express";

export default (
  userController: UserController,
  authMiddleware: AuthMiddleware
) => {
  const router = Router();
  router.get(
    "/me",
    authMiddleware.middleware.bind(authMiddleware),
    userController.getMe.bind(userController)
  );

  router.get("/:userId", userController.getUser.bind(userController));

  router.get("/wallet/:walletAddress", userController.getUserByWalletAddress.bind(userController));

  router.patch(
    "/",
    authMiddleware.middleware.bind(authMiddleware),
    userController.updateProfile.bind(userController)
  );
  return router;
};
