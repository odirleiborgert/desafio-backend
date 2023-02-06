import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class BrasilApiService {

    private readonly host: string = 'https://brasilapi.com.br/api/fipe/marcas/v1/';

    constructor(private readonly httpService: HttpService) {}

    getMarcasPorTipo(tipo: string) : Observable<AxiosResponse<any>> {
        return this.httpService.get(`${this.host}${tipo}`).pipe(
            map(response => response.data)
        );
    }
   
}
