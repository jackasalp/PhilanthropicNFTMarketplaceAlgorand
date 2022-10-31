import { Config } from '@/config';
import jwt from 'jsonwebtoken';
import { IMiddleware } from '.';

export class AuthMiddleware implements IMiddleware {
  private readonly config;

  constructor(config: Config) {
    this.config = config;
  }

  middleware(req, res, next) {
    const token = this.extractToken(req);

    if (!token) {
      return res.status(403).send('A token is required for authentication');
    }
    try {
      const decoded = jwt.verify(token, this.config.jwtToken);
      res.locals.user = decoded;
    } catch (err) {
      return res.status(401).send('Invalid Token');
    }
    return next();
  }

  private extractToken(req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      return req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
      return req.query.token;
    }
    return null;
  }
}
