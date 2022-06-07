import { Livro } from './../entities/livro';
import { AppDataSource } from './../db_connection';
import { CategoriaService } from './categoriaService';

interface ILivroRequest{
    ISBN:string;
    titulo: string;
    valor: number;
    categoria: string;
}

class LivroService{
    async executeInsert({ISBN,categoria,titulo,valor}:ILivroRequest){
        const livroRepository = AppDataSource.getRepository(Livro);
        if(!ISBN){
            throw new Error('ISBN é obrigatório');
        }
        const usuarioExistente = await livroRepository.findOne({where: {ISBN}});

        if(usuarioExistente){
            throw new Error('Livro já existe');
        }
        const categoriaService = new CategoriaService();
        let livro = new Livro();
        const cat = await categoriaService.getCategoriaPorDescricao(categoria);
        if(!cat){
            throw new Error('Categoria não existe');
        }
        livro.ISBN = ISBN;
        livro.titulo = titulo;
        livro.valor = valor;
        livro.categoria = cat;
        
        livroRepository.save(livro);
        return livro;
    }

    async getLivros(){
        const livroRepository = AppDataSource.getRepository(Livro);
        const livros = await livroRepository.find();
        return livros;
    }
    async getLivroPorISBN(ISBN:string){
        const livroRepository = AppDataSource.getRepository(Livro);
        const livro = await livroRepository.findOne({where: {ISBN}});
        if(!ISBN){
            throw new Error('Livro não existe!');
        }
        return livro;
    }

}

export {LivroService}