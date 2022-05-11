import { Entity, PrimaryColumn, Column} from "typeorm"
import {v4 as uuid} from 'uuid';
@Entity()
export class Usuario {
    @PrimaryColumn()
    readonly id: string

    @Column()
    nome: string

    @Column()
    email: string

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

}