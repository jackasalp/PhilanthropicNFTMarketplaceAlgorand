import { Config } from '@/config';
import { AuctionService } from '@/services/auction-service';
import { NFT } from '@/utils/nft';

import { Request, Response } from 'express';

interface IAuctionController {
  getAuctions(req: Request, res: Response): void;
  getAuction(req: Request, res: Response): void;
  createAuction(req: Request, res: Response): void;
  syncAuction(req: Request, res: Response): void;
}

export class AuctionController implements IAuctionController {
  config: Config;
  private readonly auctionService: AuctionService;

  constructor(config: Config, auctionService: AuctionService) {
    this.config = config;
    this.auctionService = auctionService;
  }

  async getAuctions(req: Request, res: Response) {
    try {
      const { creator, bidder, popular } = req.query;

      return res.json(
        await this.auctionService.getAuctions(
          String(creator || ''),
          String(bidder || ''),
          Number(popular || 0),
        ),
      );
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
      const { platformAddress } = this.config;

      const params = {
        creatorAddress, // Royalty Address
        platformAddress, // Royalty Address
        nftId,
        bidIncrement: 110,
      };

      return res.json(params);
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  }

  async getAuction(req: Request, res: Response) {
    try {
      const auction = await this.auctionService.getAuction(Number(req.params.appId));

      if (!auction) return res.status(404).send('not found. register it if it exists');
      return res.json(auction);
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  }
  async createAuction(req: Request, res: Response) {
    try {
      const { appId } = req.body;

      const auction = await this.auctionService.createAuction(Number(appId));

      return res.json(auction);
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  }

  async syncAuction(req: Request, res: Response) {
    try {
      const { appId } = req.params;
      return res.json(await this.auctionService.syncAuction(Number(appId)));
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  }
}
