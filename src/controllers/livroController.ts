import { Request, Response } from "express";
import { LivroService } from "../services/livroService";


class LivroController {
    async insereLivro(req: Request, res: Response) {
      const livroService = new LivroService();
    const { ISBN, titulo, valor, categoria } = req.body;
    const livro = await livroService.executeInsert({ ISBN, titulo, valor,categoria }).catch((erro)=>{
        res.status(404).json({
            message: erro.message
        }).send();
    });
    return res.json(livro);
  }
    async getLivros(_req: Request, res: Response) {
        const livroService = new LivroService();
        const livros = await livroService.getLivros().catch((erro)=>{
            res.status(404).json({
                message: erro.message
            }).send();
        });

        return res.json(livros);
    }
    async getLivroPorISBN(req: Request, res: Response) {
        const livroService = new LivroService();
        const {ISBN} = req.body;
        const livro = await livroService.getLivroPorISBN(ISBN).catch((erro)=>{
            res.status(404).json({
                message: erro.message
            }).send();
        });
        
        return res.json(livro);
    }

    }


export { LivroController };
