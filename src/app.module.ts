import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url:
        'postgres://keypoamxokrnvw:01af17f2175f07e74a4f9cbe18599e1566b855f90f13f640b587676e07f380d9@ec2-174-129-255-46.compute-1.amazonaws.com:5432/d6aql6t7nf8sf0',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
