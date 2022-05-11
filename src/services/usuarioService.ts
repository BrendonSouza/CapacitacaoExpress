import { Usuario } from './../entities/usuario';
import { AppDataSource } from './../db_connection';

interface IUsuarioRequest{
    nome: string;
    email: string;
}

class UsuarioService{
    async executeInsert({nome,email}:IUsuarioRequest){
        const userRepository = AppDataSource.getRepository(Usuario);
        if(!email){
            throw new Error('Email é obrigatório');
        }
        const usuarioExistente = await userRepository.findOne({where: {email}});
        if(usuarioExistente){
            throw new Error('Usuario já existe');
        }
        const user = userRepository.create({nome,email});
        userRepository.save(user);
        return user;
    }

    async getUsuarios(){
        const userRepository = AppDataSource.getRepository(Usuario);
        const usuarios = await userRepository.find();
        return usuarios;
    }
    async getUsuarioPorEmail(email:string){
        const userRepository = AppDataSource.getRepository(Usuario);
        const usuario = await userRepository.findOne({where: {email}});
        if(!usuario){
            throw new Error('Usuario não existe');
        }
        return usuario;
    }

}

export {UsuarioService}