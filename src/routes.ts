import { Router } from "express";

const router = Router();

router.get('/', (_request, res) => {
    res.json({
        message: 'Hello World!'
    });
})
export {router};