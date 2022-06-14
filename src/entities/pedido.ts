import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Livro } from './livro';
@Entity()
export class Pedido {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    data: Date
    
    @Column()
    descricao: string
    
    @Column()
    valorTotal:number

    @ManyToMany(() => Livro)
    @JoinTable({name: 'pedido_livro'})
    livros: Livro[]


}