import { Config } from "@/config";
import { Connection, Repository } from "typeorm";
import { Category } from "@/models";

interface ISeedingService {
  seed(connection): void;
}

export class SeedingService implements ISeedingService {
  private readonly config: Config;

  constructor(config: Config) {
    this.config = config;
  }

  async seed(connection: Connection) {
    const categoryRepository = await connection.getRepository(Category);

    const categories: Array<Category> = [
      {
        name: "Art",
        icon: "test",
      },
      {
        name: "Music",
        icon: "test",
      },
    ];

    await categoryRepository.upsert(categories, ["name"]);
  }
}
