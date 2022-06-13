import { Pedido } from './../entities/pedido';
import { Livro } from '../entities/livro';
import { AppDataSource } from '../db_connection';
import { CategoriaService } from './categoriaService';

interface ILivroRequest{
    descricao: string;
    livros: Livro[];
}

class PedidoService{
    async executeInsert({descricao,livros}:ILivroRequest){
        const pedidoRepository = AppDataSource.getRepository(Pedido);
        const pedido = new Pedido();
        pedido.descricao = descricao;
        pedido.data = new Date();
        pedido.livros = livros;
        pedido.valorTotal = livros.reduce((acc,livro)=>{
            return acc + livro.valor;
        }
        ,0);
        await pedidoRepository.save(pedido);
        return pedido;
       
    }

    
}

export {PedidoService}