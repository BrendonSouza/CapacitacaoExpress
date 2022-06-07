import { Request, Response } from "express";
import { UsuarioService } from "../services/usuarioService";
class UsuarioController {
  usuarioService = new UsuarioService();
  async insereUsuario(req: Request, res: Response) {
    const { nome, email } = req.body;
    const usuario = await this.usuarioService
      .executeInsert({ nome, email })
      .catch((erro) => {
        res
          .status(422)
          .json({
            message: erro.message,
          })
          .send();
      });
    return res.json(usuario);
  }
  async getUsuarios(req: Request, res: Response) {
    const usuarios = await this.usuarioService.getUsuarios().catch((erro) => {
      res
        .status(422)
        .json({
          message: erro.message,
        })
        .send();
    });
    return res.json(usuarios);
  }
}

export { UsuarioController };
