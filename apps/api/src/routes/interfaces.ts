import {
  AuctionController,
  AuthController,
  BuyNowController,
  CategoryController,
  ListingController,
  UserController,
} from '@/controllers';
import { AuthMiddleware } from '@/middlewares/auth-verify';
import { DenyGuestsMiddleware } from '@/middlewares/deny-guest';
import { ReportValidationErrorsMiddleware } from '@/middlewares/report-validation';

export interface ControllersRequired {
  authController: AuthController;
  auctionController: AuctionController;
  buyNowController: BuyNowController;
  listingController: ListingController;
  userController: UserController;
  categoryController: CategoryController;
}

export interface ServicesRequired {}

export interface MiddlewaresRequired {
  authMiddleware: AuthMiddleware;
  denyGuestsMiddleware: DenyGuestsMiddleware;
  reportValidationErrorsMiddleware: ReportValidationErrorsMiddleware;
}
