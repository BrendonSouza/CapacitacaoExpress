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

    @ManyToMany(() => Livro, livro => livro.pedidos)
    @JoinTable({name: 'pedido_livro'})
    livros: Livro[]


}