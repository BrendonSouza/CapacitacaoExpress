import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm"
import { Usuario } from "./usuario"

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    descricao: string

    usuarios:Usuario[]

}