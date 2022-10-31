import { Config } from '@/config';
import { UserService } from '@/services';

import { Request, Response } from 'express';

interface IUserController {
  getUser(req: Request, res: Response): void;
}

export class UserController implements IUserController {
  config: Config;
  userService: UserService;

  constructor(config: Config, userService: UserService) {
    this.config = config;
    this.userService = userService;
  }

  async getUser(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const user = await this.userService.getUser(userId);
      res.json(user);
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  }

  async getUserByWalletAddress(req: Request, res: Response) {
    try {
      const { walletAddress } = req.params;
      const user = await this.userService.getUserByWalletAddress(walletAddress);

      res.json(user);
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  }

  async getMe(req: Request, res: Response) {
    try {
      const {
        user: { userId },
      } = res.locals;
      const user = await this.userService.getUser(userId);
      res.json(user);
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  }

  async updateProfile(req: Request, res: Response) {
    try {
      const { user } = res.locals;

      const { avatar: avatarCid, bio, username } = req.body;

      res.json(
        await this.userService.update(user?.userId, {
          avatarCid,
          bio,
          username,
        }),
      );
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  }
}
