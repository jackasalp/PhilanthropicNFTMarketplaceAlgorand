import { BuyNowController } from '@/controllers';
import { ReportValidationErrorsMiddleware } from '@/middlewares/report-validation';
import { Router } from 'express';
import { body, query } from 'express-validator';

export default (
  buyNowController: BuyNowController,
  reportValidationErrors: ReportValidationErrorsMiddleware,
) => {
  const router = Router();
  router.get('/', buyNowController.getBuyNows.bind(buyNowController));

  router.get(
    '/params',
    query('nftId').isNumeric().notEmpty(),
    reportValidationErrors.middleware.bind(reportValidationErrors),
    buyNowController.getParams.bind(buyNowController),
  );
  router.get('/:appId', buyNowController.getBuyNow.bind(buyNowController));
  router.post(
    '/',
    body('appId').isNumeric().notEmpty(),
    reportValidationErrors.middleware.bind(reportValidationErrors),
    buyNowController.createBuyNow.bind(buyNowController),
  );
  router.post('/:appId/sync', buyNowController.syncBuyNow.bind(buyNowController));
  return router;
};
