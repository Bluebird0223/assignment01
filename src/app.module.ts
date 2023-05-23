import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TodosModule } from './todos/todos.module';
import { AuthService } from './auth/auth.service';
import { JwtStrategy } from './auth/jwt.strategy';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // Database configuration
    }),
    JwtModule.register({
      secret: 'YOUR_SECRET_KEY', // Replace with your own secret key
      signOptions: { expiresIn: '1h' }, // Token expiration time
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TodosModule,
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AppModule {}