import { IsNotEmpty, Length, IsInt } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateVeiculoDto } from './create-veiculo.dto';

export class UpdateVeiculoDto extends PartialType(CreateVeiculoDto) {

    @IsNotEmpty({ message: 'Categoria não pode ser vazio' })
    @IsInt({ message: 'Categoria precisa ser um número inteiro' })
    idCategoria: number;
    
    @IsNotEmpty({ message: 'Tipo não pode ser vazio' })
    @Length(3, 10, { message: 'Tipo precisa ter entre 3 e 10 caracteres' })
    tipo: string;

    @IsNotEmpty({ message: 'Marca não pode ser vazio' })
    @Length(3, 20, { message: 'Marca precisa ter entre 3 e 10 caracteres' })
    marca: string;

    @IsNotEmpty({ message: 'Modelo não pode ser vazio' })
    @Length(3, 40, { message: 'Modelo precisa ter entre 3 e 10 caracteres' })
    modelo: string;

    @IsNotEmpty({ message: 'Placa não pode ser vazio' })
    @Length(3, 10, { message: 'Placa precisa ter entre 3 e 10 caracteres' })
    placa: string;

    @IsNotEmpty({ message: 'Renavam não pode ser vazio' })
    @Length(11, 11, { message: 'Renavam precisa ter entre 11 caracteres' })
    renavam: string;

    @IsNotEmpty({ message: 'Ano não pode ser vazio' })
    @IsInt({ message: 'Ano precisa ser um número inteiro' })
    ano: number;

    @IsNotEmpty({ message: 'Peso não pode ser vazio' })
    @IsInt({ message: 'Peso precisa ser um número inteiro' })
    peso: number;

    @IsNotEmpty({ message: 'Cor não pode ser vazio' })
    @Length(3, 10, { message: 'Cor precisa ter entre 3 e 10 caracteres' })
    cor: string;

    @IsNotEmpty({ message: 'Status não pode ser vazio' })
    @IsInt({ message: 'Status precisa ser um número inteiro' })
    status: number;
}

