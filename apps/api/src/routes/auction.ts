import { AuctionController } from '@/controllers';
import { AuthMiddleware } from '@/middlewares/auth-verify';
import { ReportValidationErrorsMiddleware } from '@/middlewares/report-validation';
import { Router } from 'express';
import { body, query } from 'express-validator';

export default (
  auctionController: AuctionController,
  authMiddleware: AuthMiddleware,
  reportValidationErrors: ReportValidationErrorsMiddleware,
) => {
  const router = Router();
  //router.use(authMiddleware.middleware.bind(authMiddleware));

  router.get('/', auctionController.getAuctions.bind(auctionController));

  router.get(
    '/params',
    query('nftId').isNumeric().notEmpty(),
    reportValidationErrors.middleware.bind(reportValidationErrors),
    auctionController.getParams.bind(auctionController),
  );

  router.get('/:appId', auctionController.getAuction.bind(auctionController));
  router.post(
    '/',
    body('appId').isNumeric().notEmpty(),
    reportValidationErrors.middleware.bind(reportValidationErrors),
    auctionController.createAuction.bind(auctionController),
  );
  // router.delete(
  //   "/:appId",
  //   auctionController.closeAuction.bind(auctionController)
  // );
  router.post('/:appId/sync', auctionController.syncAuction.bind(auctionController));
  // router.patch(
  //   "/:appId",
  //   auctionController.claimAuction.bind(auctionController)
  // );

  return router;
};
