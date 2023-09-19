import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Module({
  imports: [CatsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-ck4ucpmi9prc73agni90-a.oregon-postgres.render.com',
      port: 3306,
      username: 'projeto_nestjs_typescript_sql_user',
      password: '1234',
      database: 'projeto_nestjs_typescript_sql',
      entities: [],
      synchronize: true,
      ssl: true
    })
  ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
