import { Request, Response } from "express";
import { RoleService } from "../services/roleService";

class RoleController {
  async insere(req: Request, res: Response) {
    const { descricao } = req.body;
    const usuarioService = new RoleService();
    const role = await usuarioService.insert({ descricao })
    return res.json(role);
  }
    
}

export { RoleController };
