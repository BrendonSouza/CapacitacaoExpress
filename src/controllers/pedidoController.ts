import { Request, Response } from "express";
import { PedidoService } from "../services/pedidoService";


class PedidoController {
    async inserePedido(req: Request, res: Response) {
      const pedidoService = new PedidoService();
        const { descricao, livros } = req.body;
        const pedido = await pedidoService.executeInsert({ descricao, livros }).catch((erro)=>{
            res.status(404).json({
                message: erro.message
        }).send();
    });
        return res.json(pedido);
    }   
    
  
    // async getPedidos(_req: Request, res: Response) {
    //     const pedidoService = new PedidoService();
    //     const pedido = await pedidoService.getPedidos().catch((erro)=>{
    //         res.status(404).json({
    //             message: erro.message
    //         }).send();
    //     });

    //     return res.json(pedido);
    // }
    // async getPedidoPorUUID(req: Request, res: Response) {
    //     const pedidoService = new PedidoService();
    //     const {UUID} = req.body;
    //     const pedido = await pedidoService.getPedidoPorUUID(UUID).catch((erro)=>{
    //         res.status(404).json({
    //             message: erro.message
    //         }).send();
    //     });
        
    //     return res.json(pedido);
    // }

    }


export { PedidoController };
