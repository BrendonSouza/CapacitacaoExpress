import { Entity, PrimaryColumn, Column, ManyToOne} from "typeorm"
import {v4 as uuid} from 'uuid';
import { Role } from "./roles";
@Entity()
export class Usuario {
    @PrimaryColumn()
    readonly id: string

    @Column()
    nome: string

    @Column()
    email: string

    @ManyToOne(()=>Role, (role)=> role.usuarios)
    role:Role
    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }


}