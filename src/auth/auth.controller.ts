import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() credentials: { username: string; password: string }) {
    // You can implement your own login logic here
    // For demonstration purposes, let's generate a token with the given username
    const { username } = credentials;
    const token = await this.authService.generateToken({ username });
    return { token };
  }
}