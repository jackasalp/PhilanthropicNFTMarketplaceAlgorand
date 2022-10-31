import { Config } from "@/config";
import { CategoryService } from "@/services";

import { Request, Response } from "express";

interface ICategoryController {
  createCategory(req: Request, res: Response): void;
  getCategories(req: Request, res: Response): void;
}

export class CategoryController implements ICategoryController {
  config: Config;
  categoryService: CategoryService;

  constructor(config: Config, categoryService: CategoryService) {
    this.config = config;
    this.categoryService = categoryService;
  }

  async createCategory(req: Request, res: Response) {
    try {
      const { name, icon } = req.body;
      return res.json(await this.categoryService.createCategory(name, icon));
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  }

  async getCategories(req: Request, res: Response) {
    try {
      return res.json(await this.categoryService.getCategories());
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  }
}
