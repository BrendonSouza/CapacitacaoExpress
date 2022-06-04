import { Usuario } from './../entities/usuario';
import { AppDataSource } from './../db_connection';
import { Role } from '../entities/roles';


class RoleService{
    async insert({descricao}){
        const repository = AppDataSource.getRepository(Role);
        const role = repository.create({descricao});
        await repository.save(role);
        return role;
    }
}

export {RoleService}