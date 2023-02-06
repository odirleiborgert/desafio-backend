import { Controller, Get, Param } from '@nestjs/common';
import { BrasilApiService } from './brasil-api.service';

@Controller('brasil-api')
export class BrasilApiController {

    constructor(private readonly brasilApiService: BrasilApiService) {}

    @Get('/marcas/:tipo')
    findAllMarcas(@Param('tipo') tipo: string) {
        return this.brasilApiService.getMarcasPorTipo(tipo);
    }

}
