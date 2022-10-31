import { AuthController } from '@/controllers';
import { ReportValidationErrorsMiddleware } from '@/middlewares/report-validation';
import { Router } from 'express';

import { body } from 'express-validator';

// auth routes
export default (
  authController: AuthController,
  reportValidationErrors: ReportValidationErrorsMiddleware
) => {
  const router = Router();

  router.post(
    '/init',

    // walletAddress is required and is valid algorand
    body('walletAddress')
      .isAlphanumeric()
      .notEmpty()
      .isLength({ min: 58, max: 58 }),

    // report if there is any validation error
    reportValidationErrors.middleware.bind(reportValidationErrors),

    authController.initiateAuth.bind(authController)
  );

  router.post(
    '/connect-wallet',
    body('walletAddress').notEmpty().isLength({ min: 58, max: 58 }),
    body('txn').notEmpty(),
    body('stxn').notEmpty(),

    // report if there is any validation error
    reportValidationErrors.middleware.bind(reportValidationErrors),

    authController.connectWallet.bind(authController)
  );

  // this is done on frontend (this is just for testing)
  // router.post(
  //   '/test-sign',
  //   authController.buildMockSigner(accountService).bind(authController)
  // );
  return router;
};
