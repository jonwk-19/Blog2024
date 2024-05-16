import { response, request } from "express";
import Comment from './comment.model.js';
import { isToken } from "../../helpers/tk-metods.js";
import Proyect from "../proyect/proyect.model.js";

export const getComments = async (req = request, res = response) => {
    const {proyectId} = req.params;
    const query = {proyectId, estado: true};

    const comments = await Comment.find(query);

    res.status(200).json({
        comments
    });
}

export const createComment = async (req, res) => {
    try {
        const {proyectId} = req.params;
        const {comment, img} = req.body;
        const user = await isToken(req, res);
        if (!user){
            return;
        }

        const proyect = await Proyect.findOne({_id: proyectId});
        if (!proyect){
            return res.status(400).json({msg: 'El proyecto no existe.'});
        }

        const newComment = new Comment({user, proyectId, comment, img});
        await newComment.save();
        res.status(200).json({msg: `Comentario: ${newComment.comment} || Proyecto: ${proyect.title}.`});
    } catch (error) {
        console.error('Error al crear el comentario:', error);
        res.status(500).json({ msg: 'Hubo un error al crear el comentario.' });
    }
}

export const deleteComment = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await isToken(req, res);
        if (!user){
            return;
        }

        const comment = await Comment.findOne({_id: id});
        if (!comment){
            return res.status(400).json({msg: 'El comentario no existe.'});
        }

        comment.estado = false;
        await comment.save();
        res.status(200).json({msg: `Comentario eliminado.`});
    } catch (error) {
        console.error('Error al eliminar el comentario:', error);
        res.status(500).json({ msg: 'Hubo un error al eliminar el comentario.' });
    }
}

