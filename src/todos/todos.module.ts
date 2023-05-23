import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'YOUR_DB_TYPE',
      host: 'YOUR_DB_HOST',
      port: YOUR_DB_PORT,
      username: 'YOUR_DB_USERNAME',
      password: 'YOUR_DB_PASSWORD',
      database: 'YOUR_DB_NAME',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TodosModule,
  ],
})
export class AppModule {}