import { Request, Response } from "express";
import { CategoriaService } from "../services/categoriaService";

class CategoriaController {
  async insereCategoria(req: Request, res: Response) {
    const categoriaService = new CategoriaService();
    const { descricao } = req.body;
    const categoria = await categoriaService.executeInsert({ descricao }).catch((erro)=>{
        res.status(422).json({
            message: erro.message
        }).send();
    });
    return res.json(categoria);
  }
    async getCategoria(req: Request, res: Response) {
        const categoriaService = new CategoriaService();
        const categoria = await categoriaService.getCategoria().catch((erro)=>{
            res.status(422).json({
                message: erro.message
            }).send();
        }
        );
        return res.json(categoria);
    }
    
}

export { CategoriaController };
