import { Config } from '@/config';
import { AuthService } from '@/services';

import { Request, Response } from 'express';

interface IAuthController {
  initiateAuth(req: Request, res: Response): void;
}

export class AuthController implements IAuthController {
  config: Config;
  authService: AuthService;

  constructor(config: Config, authService: AuthService) {
    this.config = config;
    this.authService = authService;
  }

  async initiateAuth(req: Request, res: Response) {
    try {
      const { walletAddress } = req.body;

      return res.status(200).json(await this.authService.initiateAuth(walletAddress));
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  }

  async connectWallet(req: Request, res: Response) {
    try {
      const { walletAddress, txn: encodedTxn, stxn: encodedSignedTxn } = req.body;

      const token = await this.authService.connectWallet(
        walletAddress,
        encodedTxn,
        encodedSignedTxn,
      );

      return res.status(200).json({
        token,
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  }
}
