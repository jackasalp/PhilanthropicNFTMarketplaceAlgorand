import { Config } from "@/config";

import { Repository } from "typeorm";
import { Category } from "@/models";
import { NftService } from ".";

interface ICategoryService {
  createCategory(name: string, icon: string): Promise<Category>;

  getCategories(): Promise<Array<Category>>;
}

export class CategoryService implements ICategoryService {
  private readonly categoriesRepository: Repository<Category>;

  private readonly config: Config;

  constructor(
    stdlib: any,
    config: Config,
    categoriesRepository: Repository<Category>,
  ) {
    this.categoriesRepository = categoriesRepository;
    this.config = config;
  }

  async createCategory(name: string, icon: string): Promise<Category> {
    const category = await this.categoriesRepository.create({
      name,
      icon,
    });

    return await this.categoriesRepository.save(category);
  }

  async getCategories() {
    return await this.categoriesRepository.find({});
  }
}
