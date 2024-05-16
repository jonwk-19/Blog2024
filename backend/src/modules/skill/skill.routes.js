import { Router } from "express";
import { check } from "express-validator";
import {skillGet,
  getSkillById,
  createSkill,
  updateSkill} from "./skill.controller.js";
import { validateJWT } from "../../middlewares/validate-jwt.js";

const router = Router();

router.get("/", skillGet);

router.get(
    "/:id",
    [
        check("id", "No es un ID válido").isMongoId(),
    ],
    getSkillById
);

router.post(
    "/",
    [
        validateJWT,
        check("skill", "La habilidad es obligatoria").not().isEmpty(),
        check("porcent", "El porcentaje es obligatorio").not().isEmpty(),
    ],
    createSkill
);

router.put(
    "/:id",
    [
        validateJWT,
        check("skill", "La habilidad es obligatoria").not().isEmpty(),
        check("porcent", "El porcentaje es obligatorio").not().isEmpty(),
    ],
    updateSkill
);

router.delete(
    "/:id",
    [
        validateJWT,
        check("id", "No es un ID válido").isMongoId(),
    ],
    updateSkill
);

export default router;