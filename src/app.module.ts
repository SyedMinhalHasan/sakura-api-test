import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as config from 'config';
import { typeOrmConfig } from './config/typeorm.config';

const db = config.get('db');
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: db,
      entities: ['dist/models/**/*.js'],
      synchronize: true,
      migrations: ['dist/src/database/migrations/*.js'],
      cli: {
        migrationsDir: 'src/database/migrations',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
