import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AppRepo } from './app.repo';
import {
  CreateUserRequest,
  CreateUserResponse,
  GetUserRequest,
  GetUserResponse,
} from './app.model';

@Injectable()
export class AppService {
  constructor(private readonly appRepo: AppRepo) {}

  async getUser(request: GetUserRequest): Promise<GetUserResponse> {
    const userEntity = await this.appRepo.getUser(request.username);
    if (userEntity == null) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return {
      uid: userEntity.uid,
      username: userEntity.username,
      email: userEntity.email,
      creationDate: userEntity.date_created,
    };
  }

  async createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    const result = await this.appRepo.createUser(
      request.username,
      request.email,
      request.password,
    );
    if (result == null) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }
    return {
      uid: result.uid,
    };
  }
}
