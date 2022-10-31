import { Config } from '@/config';
import { User } from '@/models';
import { ListingService, UserService } from '@/services';
import { isEmpty, isString } from 'lodash';

import { Request, Response } from 'express';

interface IListingController {
  getLatestListings(req: Request, res: Response): void;
  getUserListings(req: Request, res: Response): void;
  getMyListings(req: Request, res: Response): void;
}

export class ListingController implements IListingController {
  config: Config;
  listingService: ListingService;
  userService: UserService;

  constructor(config: Config, listingService: ListingService, userService: UserService) {
    this.config = config;
    this.listingService = listingService;
    this.userService = userService;
  }

  async getLatestListings(req: Request, res: Response) {
    try {
      const { type } = req.query;

      const latestListings = await this.listingService.getLatestListings(String(type) || 'all');

      return res.json(latestListings);
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  }

  async getListings(req: Request, res: Response) {
    try {
      const { category } = req.query;

      const result = await this.listingService.getListings(String(category) || 'all');
      return res.json(result);
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  }

  async getUserListings(req: Request, res: Response) {
    try {
      const {
        params: { userId },
      } = req;

      const user = await this.userService.getUser(userId);

      const listings = await this.listingService.getUserListings(user);

      return res.json(listings);
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  }

  async getMyListings(req: Request, res: Response) {
    try {
      const userId = res.locals.user?.userId;

      const user = await this.userService.getUser(userId);

      const { type } = req.query;

      const listings = await this.listingService.getUserListings(user, String(type));

      return res.json(listings);
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  }
}
