import { IsNotEmpty, Length } from 'class-validator';

export class CreateCategoriaDto {

    @IsNotEmpty({ message: 'Nome não pode ser vazio' })
    @Length(2, 20, { message: 'Nome precisa ter entre 3 e 10 caracteres' })
    nome: string;

}
