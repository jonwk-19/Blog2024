import { response, request } from "express";
import Proyect from './proyect.model.js';
import { isToken } from "../../helpers/tk-metods.js";

export const proyectGet = async (req = request, res = response) => {
    const {limite, desde} = req.query;
    const query = {status: true};

    const [total, proyects] = await Promise.all([
        Proyect.countDocuments(query),
        Proyect.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);

    res.status(200).json({
        total,
        proyects
    });
}

export const getProyectById = async (req, res) => {
    const {id} = req.params;
    const proyect = await Proyect.findOne({_id: id});

    res.status(200).json({
        proyect
    })
}

export const createProyect = async (req, res) => {
    try {
        const {title, subTitle, description, img, timePeriod, technologies} = req.body;
        const user = await isToken(req, res);
        if (!user){
            return;
        }

        const proyect = new Proyect({title, subTitle, description, img, timePeriod, technologies});
        await proyect.save();
        res.status(200).json({msg: `Proyecto: ${proyect.title} || Descripcion: ${proyect.description} || Tecnologias: ${proyect.technologies}.`});
    } catch (error) {
        console.error('Error al crear el proyecto:', error);
        res.status(500).json({ msg: 'Hubo un error al crear el proyecto.' });
    }
}

export const updateProyect = async (req, res) => {
    try {
        const {id} = req.params;
        const {title, subTitle, description, img, timePeriod, technologies} = req.body;
        const user = await isToken(req, res);
        if (!user){
            return;
        }

        const proyect = await Proyect.findOne({_id: id});
        if (!proyect){
            return res.status(400).json({msg: 'El proyecto no existe.'});
        }

        await Proyect.findByIdAndUpdate(id, {title, subTitle, description, img, timePeriod, technologies});
        res.status(200).json({msg: `Proyecto: ${proyect.title} || Descripcion: ${proyect.description} || Tecnologias: ${proyect.technologies}.`});
    } catch (error) {
        console.error('Error al actualizar el proyecto:', error);
        res.status(500).json({ msg: 'Hubo un error al actualizar el proyecto.' });
    }
}

export const deleteProyect = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await isToken(req, res);
        if (!user){
            return;
        }

        const proyect = await Proyect.findOne({_id: id});
        if (!proyect){
            return res.status(400).json({msg: 'El proyecto no existe.'});
        }

        await Proyect.findByIdAndUpdate(id, {status: false});
        res.status(200).json({msg: `Proyecto: ${proyect.title} eliminado.`});
    } catch (error) {
        console.error('Error al eliminar el proyecto:', error);
        res.status(500).json({ msg: 'Hubo un error al eliminar el proyecto.' });
    }
}