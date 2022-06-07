import { Router } from "express";
import { UsuarioController } from "./controllers/usuarioController";
import { CategoriaController } from "./controllers/categoriaController";
import { LivroController } from "./controllers/livroController";

const router = Router();
const usuarioController = new UsuarioController();
const categoriaController = new CategoriaController();
const livroController = new LivroController();
router.get('/', (_request, res) => {
    res.json({
        message: 'Hello World!'
    });
})

router.post("/usuario", usuarioController.insereUsuario);
router.get("/usuario", usuarioController.getUsuarios);
router.post("/categoria", categoriaController.insereCategoria);
router.get("/livro", livroController.insereLivro);

export {router};