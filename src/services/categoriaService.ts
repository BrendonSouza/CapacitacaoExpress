import { Categoria } from './../entities/categoria';
import { AppDataSource } from './../db_connection';

interface IcategoriaRequest{
    descricao: string;
    
}

class CategoriaService{
    async executeInsert({descricao}:IcategoriaRequest){
        const categoriaRepository = AppDataSource.getRepository(Categoria);
        if(!descricao){
            throw new Error('Descrição obrigatória');
        }
        const cat = categoriaRepository.create({descricao});
        categoriaRepository.save(cat);
        return cat;
    }

    async getCategoria(){
        const categoriaRepository = AppDataSource.getRepository(Categoria);
        const categoria = await categoriaRepository.find();
        return categoria;
    }
    async getCategoriaPorDescricao(descricao:string){
        const categoriaRepository = AppDataSource.getRepository(Categoria);
        const categoria = await categoriaRepository.findOne({where: {descricao}});
        if(!categoria){
            throw new Error('Descrição incorreta');
        }
        return categoria;
    }

}

export {CategoriaService}