import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from './entities/categoria.entity';

@Injectable()
export class CategoriasService {

  constructor(
    @InjectRepository(Categoria)
    private categoriasRepository: Repository<Categoria>,
  ) {}

  async create(createCategoriaDto: CreateCategoriaDto) {
    return await this.categoriasRepository.save(createCategoriaDto);
  }

  findAll(): Promise<Categoria[]>{
    return this.categoriasRepository.find();
  }

  findOne(id: number) {
    return this.categoriasRepository.findOneBy({ id });
  }

  update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return this.categoriasRepository.update(id, updateCategoriaDto);
  }

  remove(id: number) {
    return this.categoriasRepository.delete(id);
  }
}
