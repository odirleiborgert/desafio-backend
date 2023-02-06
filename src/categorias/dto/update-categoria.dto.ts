import { IsNotEmpty, Length } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriaDto } from './create-categoria.dto';

export class UpdateCategoriaDto extends PartialType(CreateCategoriaDto) {

    @IsNotEmpty({ message: 'Nome não pode ser vazio' })
    @Length(2, 20, { message: 'Nome precisa ter entre 3 e 10 caracteres' })
    nome: string;
}
