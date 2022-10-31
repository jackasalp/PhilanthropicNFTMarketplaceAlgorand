import { Config } from '@/config';
import { v4 as uuid } from 'uuid';

import { Repository } from 'typeorm';
import { User, Wallet } from '@/models';

// import bcrypt from "bcrypt";

interface IUserUpdateChanges {
  bio?: string;
  avatarCid?: string;
  username?: string;
}

interface IUserService {
  createUser(address: string, wallet: Wallet): Promise<User>;

  getUsers(creator: string): Promise<Array<User>>;
  getUser(appId: string): Promise<User>;
  getUserByUsername(username: string): Promise<User>;
  getUserByWalletAddress(walletId: string): Promise<User>;
  update(userId: string, changes: IUserUpdateChanges): Promise<{ success: Boolean }>;
}

export class UserService implements IUserService {
  private readonly config: Config;
  private readonly stdlib: any;

  private readonly userRepository: Repository<User>;
  private readonly walletRepository: Repository<Wallet>;

  constructor(
    stdlib: any,
    config: Config,
    userRepository: Repository<User>,
    walletRepository: Repository<Wallet>,
  ) {
    this.stdlib = stdlib;
    this.userRepository = userRepository;
    this.walletRepository = walletRepository;
    this.config = config;
  }

  async createUser(walletAddress: string) {
    const wallet = await this.walletRepository.findOne({
      where: { address: walletAddress },
    });
    const user: User = {
      wallet,
      id: uuid(),
      listings: [],
      createdAt: new Date(),
    };
    return this.userRepository.save(user);
  }

  async getUsers() {
    return await this.userRepository.find();
  }

  async getUser(userId: string) {
    return this.userRepository.findOne({ where: { id: userId }, relations: ['wallet'] });
  }

  async update(userId: string, changes: IUserUpdateChanges) {
    const result = await this.userRepository.update({ id: userId }, changes);
    return {
      success: result.affected > 0,
    };
  }

  async getUserByUsername(username: string) {
    return await this.userRepository.findOne({ where: { username } });
  }

  async getUserByWalletAddress(walletAddress: string) {
    return (
      await this.walletRepository.findOne({
        where: {
          address: walletAddress,
        },
        relations: ['user'],
      })
    )?.user;
  }
}
