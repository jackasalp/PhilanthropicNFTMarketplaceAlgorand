import { Config } from '@/config';
import { Router } from 'express';
import { ControllersRequired, MiddlewaresRequired, ServicesRequired } from './interfaces';

import authRouter from './auth';
import listingsRouter from './listing';
import auctionsRouter from './auction';
import buyNowRouter from './buy-now';
import usersRouter from './users';
import categoriesRouter from './categories';

export default function (
  config: Config,
  {
    authController,
    auctionController,
    buyNowController,
    listingController,
    userController,
    categoryController,
  }: ControllersRequired,
  {}: ServicesRequired,
  { authMiddleware, denyGuestsMiddleware, reportValidationErrorsMiddleware }: MiddlewaresRequired,
) {
  // **********************
  // Route definitions
  // **********************

  const apiRouter = Router();

  apiRouter.use('/auth', authRouter(authController, reportValidationErrorsMiddleware));
  apiRouter.use('/listings', listingsRouter(listingController, authMiddleware));
  apiRouter.use(
    '/auctions',
    auctionsRouter(auctionController, authMiddleware, reportValidationErrorsMiddleware),
  );
  apiRouter.use('/buy-now', buyNowRouter(buyNowController, reportValidationErrorsMiddleware));
  apiRouter.use('/users', usersRouter(userController, authMiddleware));
  apiRouter.use('/categories', categoriesRouter(categoryController, authMiddleware));

  return apiRouter;
}
