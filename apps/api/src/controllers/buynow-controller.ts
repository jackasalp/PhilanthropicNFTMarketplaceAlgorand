import { Config } from '@/config';
import { BuyNowService } from '@/services/buynow-service';
import { NFT } from '@/utils/nft';

import { Request, Response } from 'express';

interface IBuyNowController {
  getBuyNows(req: Request, res: Response): void;
  getBuyNow(req: Request, res: Response): void;
  createBuyNow(req: Request, res: Response): void;
  syncBuyNow(req: Request, res: Response): void;
}

export class BuyNowController implements IBuyNowController {
  config: Config;
  buyNowService: BuyNowService;

  constructor(config: Config, buyNowService: BuyNowService) {
    this.config = config;
    this.buyNowService = buyNowService;
  }

  async getBuyNows(req: Request, res: Response) {
    try {
      const { creator } = req.query;

      return res.json(await this.buyNowService.getBuyNows(String(creator || '')));
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  }

  async getParams(req: Request, res: Response) {
    try {
      const { nftId } = req.query;

      const nft = await NFT.fromAssetId(Number(nftId));

      const creatorAddress = nft?.token?.creator;
      const { platformAddress, platformPercentage, royaltyPercentage } = this.config;

      const params = {
        royaltyAddress: creatorAddress, // Royalty Address
        platformAddress, // Royalty Address
        platformPercentage: Number(platformPercentage), // Royalty Address
        royaltyPercentage: Number(royaltyPercentage),
        nftId,
      };

      return res.json(params);
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  }

  async getBuyNow(req: Request, res: Response) {
    try {
      return res.json(await this.buyNowService.getBuyNow(Number(req.params.appId)));
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  }

  async createBuyNow(req: Request, res: Response) {
    try {
      const { appId } = req.body;

      return res.json(await this.buyNowService.createBuyNow(Number(appId)));
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  }

  async syncBuyNow(req: Request, res: Response) {
    try {
      const { appId } = req.params;
      return res.json(await this.buyNowService.syncBuyNow(Number(appId)));
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  }
}
