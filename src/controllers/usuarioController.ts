import { Request, Response } from "express";
import { UsuarioService } from "../services/usuarioService";
class UsuarioController {
  async insereUsuario(req: Request, res: Response) {
    const { nome, email,role } = req.body;
    const usuarioService = new UsuarioService();
    const usuario = await usuarioService.executeInsert({ nome, email, role }).catch((erro)=>{
        res.status(422).json({
            message: erro.message
        }).send();
    });
    return res.json(usuario);
  }
    async getUsuarios(req: Request, res: Response) {
        const usuarioService = new UsuarioService();
        const usuarios = await usuarioService.getUsuarios().catch((erro)=>{
            res.status(422).json({
                message: erro.message
            }).send();
        }
        );
        return res.json(usuarios);
    }
    
}

export { UsuarioController };
