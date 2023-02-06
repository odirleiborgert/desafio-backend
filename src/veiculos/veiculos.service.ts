import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
import { Veiculo } from './entities/veiculo.entity';

@Injectable()
export class VeiculosService {

  constructor(
    @InjectRepository(Veiculo)
    private veiculossRepository: Repository<Veiculo>,
  ) {}

  create(createVeiculoDto: CreateVeiculoDto) {
    return this.veiculossRepository.save(createVeiculoDto);
  }

  findAll() {
    return this.veiculossRepository.find();
  }

  findOne(id: number) {
    return this.veiculossRepository.findOneBy({ id });
  }

  update(id: number, updateVeiculoDto: UpdateVeiculoDto) {
    return this.veiculossRepository.update(id, updateVeiculoDto);
  }

  remove(id: number) {
    return this.veiculossRepository.delete(id);
  }
}
