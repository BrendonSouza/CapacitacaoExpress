import { Livro } from './../entities/livro';
import { Pedido } from './../entities/pedido';
import { AppDataSource } from './../db_connection';

import { LivroService } from './livroService'


interface IPedidoRequest{
    
    
    descricao: string;
    livros:Livro[]
}

class PedidoService{
    async executeInsert({descricao,livros}:IPedidoRequest){
        const pedidoRepository = AppDataSource.getRepository(Pedido);
        const livroService = new LivroService();

        if(!livros){
            throw new Error('Ponha algum livro!');
        }

        const pedido = new Pedido();
        pedido.livros = [];
        
        for( let livro of livros){
            const livroEncontrado = await livroService.getLivroPorISBN(livro.ISBN);
            pedido.livros.push(livroEncontrado);
        }
        pedido.descricao = descricao;
        pedido.data = new Date();
        pedido.valorTotal = livros.reduce((total,livro)=>{ 
            return total+livro.valor;
        },0)
        pedidoRepository.save(pedido)
        return pedido;
    }

  
//  async getPedidos(){
       
//         return pedidos;
//     }
    


}

export {PedidoService}