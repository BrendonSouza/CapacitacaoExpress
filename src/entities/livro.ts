import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from './categoria';
import { Pedido } from './pedido';
@Entity()
export class Livro {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    ISBN: string

    @Column()
    titulo: string

    @ManyToOne(() => Categoria, categoria => categoria.livros)
    categoria: Categoria

    @Column()
    valor:number

    @ManyToMany(() => Pedido, pedido => pedido.livros)
    pedidos: Pedido[]

}