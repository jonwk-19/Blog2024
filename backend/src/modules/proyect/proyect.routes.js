import { Router } from "express";
import { check } from "express-validator";
import { proyectGet, getProyectById, createProyect, updateProyect, deleteProyect } from "./proyect.controller.js";
import { validateJWT } from "../../middlewares/validate-jwt.js";

const router = Router();

router.get("/", proyectGet);

router.get(
    "/:id",
    [
        check("id", "No es un ID válido").isMongoId(),
    ],
    getProyectById
);

router.post(
    "/",
    [
        validateJWT,
        check("title", "El titulo es obligatorio").not().isEmpty(),
        check("subTitle", "El subtitulo es obligatorio").not().isEmpty(),
        check("description", "La descripcion es obligatoria").not().isEmpty(),
        check("img", "La imagen es obligatoria").not().isEmpty(),
        check("timePeriod", "El periodo es obligatorio").not().isEmpty(),
        check("technologies", "Las tecnologias son obligatorias").not().isEmpty(),
    ],
    createProyect
);

router.put(
    "/:id",
    [
        validateJWT,
        check("title", "El titulo es obligatorio").not().isEmpty(),
        check("subTitle", "El subtitulo es obligatorio").not().isEmpty(),
        check("description", "La descripcion es obligatoria").not().isEmpty(),
        check("img", "La imagen es obligatoria").not().isEmpty(),
        check("timePeriod", "El periodo es obligatorio").not().isEmpty(),
        check("technologies", "Las tecnologias son obligatorias").not().isEmpty(),
    ],
    updateProyect
);

router.delete(
    "/:id",
    [
        validateJWT,
        check("id", "No es un ID válido").isMongoId(),
    ],
    deleteProyect
);

export default router;