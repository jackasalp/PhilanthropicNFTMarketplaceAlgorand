import { ListingController } from "@/controllers";
import { AuthMiddleware } from "@/middlewares/auth-verify";
import { Router } from "express";

export default (
  listingController: ListingController,
  authMiddleware: AuthMiddleware
) => {
  const router = Router();

  router.get(
    "/newest",
    listingController.getLatestListings.bind(listingController)
  );
  router.get(
    "/user-listings/:userId",
    listingController.getUserListings.bind(listingController)
  );

  router.get(
    "/my-listings",
    authMiddleware.middleware.bind(authMiddleware),
    listingController.getMyListings.bind(listingController)
  );

  router.get(
    "/listings",
    listingController.getListings.bind(listingController)
  );

  return router;
};
