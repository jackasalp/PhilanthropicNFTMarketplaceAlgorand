import { IMiddleware } from ".";

import { validationResult } from "express-validator";

export class ReportValidationErrorsMiddleware implements IMiddleware {
  middleware(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    return next();
  }
}
