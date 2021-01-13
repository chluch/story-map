import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppRepo } from './app.repo';
import { AuthModule } from './auth/auth.module';

// TODO: AuthModule as import? (Suggested by Error Message from Terminal)

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService, AppRepo],
})
export class AppModule {}
