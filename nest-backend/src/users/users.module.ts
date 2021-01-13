import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { AppRepo } from '../app.repo';

// TODO: check AppRepo in provider?

@Module({
  providers: [UsersService, AppRepo],
  exports: [UsersService],
})
export class UsersModule {}
