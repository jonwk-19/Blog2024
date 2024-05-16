import { response, request } from "express";
import Exp from './exp.model.js';
import { isToken } from "../../helpers/tk-metods.js";

export const expGet = async (req = request, res = response) => {
    const {limite, desde} = req.query;
    const query = {status: true};

    const [total, exps] = await Promise.all([
        Exp.countDocuments(query),
        Exp.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);

    res.status(200).json({
        total,
        exps
    });
}

export const getExpById = async (req, res) => {
    const {id} = req.params;
    const exp = await Exp.findOne({_id: id});

    res.status(200).json({
        exp
    })
}

export const createExp = async (req, res) => {
    try {
        const {place, timePeriod, description} = req.body;
        const user = await isToken(req, res);
        if (!user){
            return;
        }

        const exp = new Exp({place, timePeriod, description});
        await exp.save();
        res.status(200).json({msg: `Experiencia: ${exp.place} || Periodo: ${exp.timePeriod} || Descripcion: ${exp.description}.`});
    } catch (error) {
        console.error('Error al crear la experiencia:', error);
        res.status(500).json({ msg: 'Hubo un error al crear la experiencia.' });
    }
}

export const updateExp = async (req, res) => {
    try {
        const {id} = req.params;
        const {place, timePeriod, description} = req.body;
        const user = await isToken(req, res);
        if (!user){
            return;
        }

        const exp = await Exp.findOne({_id: id});
        if (!exp){
            return res.status(400).json({msg: 'La experiencia no existe.'});
        }

        exp.place = place;
        exp.timePeriod = timePeriod;
        exp.description = description;
        await exp.save();
        res.status(200).json({msg: `Experiencia: ${exp.place} || Periodo: ${exp.timePeriod} || Descripcion: ${exp.description}.`});
    } catch (error) {
        console.error('Error al actualizar la experiencia:', error);
        res.status(500).json({ msg: 'Hubo un error al actualizar la experiencia.' });
    }
}

export const deleteExp = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await isToken(req, res);
        if (!user){
            return;
        }

        const exp = await Exp.findOne({_id: id});
        if (!exp){
            return res.status(400).json({msg: 'La experiencia no existe.'});
        }

        exp.status = false;
        await exp.save();
        res.status(200).json({msg: `Experiencia: ${exp.place} eliminada.`});
    } catch (error) {
        console.error('Error al eliminar la experiencia:', error);
        res.status(500).json({ msg: 'Hubo un error al eliminar la experiencia.' });
    }
}

