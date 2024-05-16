import { Router } from "express";
import { check } from "express-validator";
import {getComments,
  createComment,
  deleteComment} from "./comment.controller.js"
import { validateCampus } from "../../middlewares/validate-campus.js";
import { validateJWT } from "../../middlewares/validate-jwt.js";

const router = Router();

router.get("/", getComments);

router.post(
  "/",
  [
    validateJWT,
    check("publicationTitle", "El titulo de la publicacion a comentar es obligatorio").not().isEmpty(),  
    check("publicationDate", "La fecha es obligatoria").not().isEmpty(),
    check("text", "El texto es obligatorio").not().isEmpty(),
    validateCampus,
  ],
  createComment
);

router.delete(
  "/",
  [
    validateJWT,
    check("publicationTitle", "El titulo de la publicacion es obligatorio").not().isEmpty(),
    check("commentDate","La fecha es obligatoria").not().isEmpty(),
    validateCampus,
  ],
  deleteComment
);


export default router;
