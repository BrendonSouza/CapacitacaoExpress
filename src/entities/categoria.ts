import { Livro } from './livro';
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Categoria {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    descricao: string

    livros: Livro[]
    
}