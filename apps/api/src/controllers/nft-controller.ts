import { Request, Response } from 'express';

interface INftController {
  getNft(req: Request, res: Response): void;
  getNfts(req: Request, res: Response): void;
  getMyNfts(req: Request, res: Response): void;
}
