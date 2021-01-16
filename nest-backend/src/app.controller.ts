import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import {
  GetUserResponse,
  CreateUserResponse,
  CreateUserRequest,
} from './app.model';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';

@Controller('_api/')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @Get('/user/:id')
  async getUser(@Param('id') id: string): Promise<GetUserResponse> {
    const req = { username: id };
    return this.appService.getUser(req);
  }

  @Post('/signup')
  creatUser(@Body() request: CreateUserRequest): Promise<CreateUserResponse> {
    return this.appService.createUser(request);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req, @Res({ passthrough: true }) response: Response) {
    const jwt = await this.authService.login(req.user);
    response.cookie('auth', jwt.access_token, {
      expires: new Date(Date.now() + 3600),
      secure: true,
      httpOnly: true,
      sameSite: 'lax',
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
