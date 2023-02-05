import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Veiculo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    idCategoria: string;

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
