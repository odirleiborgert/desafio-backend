import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Categoria } from 'src/categorias/entities/categoria.entity';

@Entity()
export class Veiculo {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Categoria)
    @Column()
    idCategoria: number;

    @Column()
    tipo: string;

    @Column()
    marca: string;

    @Column()
    modelo: string;

    @Column()
    placa: string;

    @Column()
    renavam: string;

    @Column()
    ano: number;

    @Column()
    peso: number;

    @Column()
    cor: string;

    @Column()
    status: number;

    
}
