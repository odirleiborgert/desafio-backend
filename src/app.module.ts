import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriasModule } from './categorias/categorias.module';
import { VeiculosModule } from './veiculos/veiculos.module';

@Module({
  imports: [CategoriasModule, VeiculosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
