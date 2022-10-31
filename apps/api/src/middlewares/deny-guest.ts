import { Config } from "@/config";
import { IMiddleware } from ".";

export class DenyGuestsMiddleware implements IMiddleware {
  private readonly config;

  constructor(config: Config) {
    this.config = config;
  }

  middleware(req, res, next) {
    const user = res.locals.user;

    if (!user || typeof user !== "object") {
      return res.status(403).send("unauthorized");
    }

    try {
      if (!user.isGuest) {
        return next();
      }
      return res.status(403).send("guest is not allowed. please login as user");
    } catch (err) {
      return res.status(403).send("guest is not allowed. please login as user");
    }
  }
}
