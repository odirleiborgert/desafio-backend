import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriasModule } from './categorias/categorias.module';
import { VeiculosModule } from './veiculos/veiculos.module';
import { Categoria } from './categorias/entities/categoria.entity';
import { Veiculo } from './veiculos/entities/veiculo.entity';
import { BrasilApiController } from './brasil-api/brasil-api.controller';
import { HttpModule } from '@nestjs/axios';
import { BrasilApiService } from './brasil-api/brasil-api.service';

@Module({
  imports: [
    HttpModule,
    CategoriasModule, 
    VeiculosModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'c2y',
      password: 'cars2you',
      database: 'c2y',
      entities: [Categoria, Veiculo],
      synchronize: true,
    })
  ],
  controllers: [AppController, BrasilApiController],
  providers: [AppService, BrasilApiService],
})
export class AppModule {}
