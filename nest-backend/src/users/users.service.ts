import { Injectable } from '@nestjs/common';
import { AppRepo } from '../app.repo';

@Injectable()
export class UsersService {
  constructor(private readonly appRepo: AppRepo) {}
  async matchUser(username: string): Promise<any> {
    return await this.appRepo.matchUser(username);
  }
}
