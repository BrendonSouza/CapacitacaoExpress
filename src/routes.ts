import { Router } from "express";
import { RoleController } from "./controllers/roleController";
import { UsuarioController } from "./controllers/usuarioController";

const router = Router();
const usuarioController = new UsuarioController();
const roleController = new RoleController();
router.get('/', (_request, res) => {
    res.json({
        message: 'Hello World!'
    });
})

router.post("/usuario", usuarioController.insereUsuario);
router.get("/usuario", usuarioController.getUsuarios);
router.get("/role", roleController.insere);

export {router};