import { Router } from "express";
import { check } from "express-validator";
import {expGet,
  getExpById,
  createExp,
  updateExp} from "./exp.controller.js";
import { validateJWT } from "../../middlewares/validate-jwt.js";

const router = Router();

router.get("/", expGet);

router.get(
    "/:id",
    [
        check("id", "No es un ID válido").isMongoId(),
    ],
    getExpById
);

router.post(
    "/",
    [
        validateJWT,
        check("place", "El lugar es obligatorio").not().isEmpty(),
        check("timePeriod", "El periodo es obligatorio").not().isEmpty(),
        check("description", "La descripcion es obligatoria").not().isEmpty(),
    ],
    createExp
);

router.put(
    "/:id",
    [
        validateJWT,
        check("place", "El lugar es obligatorio").not().isEmpty(),
        check("timePeriod", "El periodo es obligatorio").not().isEmpty(),
        check("description", "La descripcion es obligatoria").not().isEmpty(),
    ],
    updateExp
);

router.delete(
    "/:id",
    [
        validateJWT,
        check("id", "No es un ID válido").isMongoId(),
    ],
    updateExp
);

export default router;