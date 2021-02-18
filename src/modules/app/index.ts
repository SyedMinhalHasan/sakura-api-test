import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as config from 'config';
import { AppController } from '../../controllers/app';
import { AppService } from '../../services/app';

const db = config.get('db');
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: db,
      entities: ['dist/models/**/*.js'],
      synchronize: true,
      ssl: true,
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
