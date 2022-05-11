import { Router } from "express";
import { UsuarioController } from "./controllers/usuarioController";

const router = Router();
const usuarioController = new UsuarioController();
router.get('/', (_request, res) => {
    res.json({
        message: 'Hello World!'
    });
})

router.post("/usuario", usuarioController.insereUsuario);
router.get("/usuario", usuarioController.getUsuarios);
export {router};