import { response, request } from "express";
import Skill from './skill.model.js';
import { isToken } from "../../helpers/tk-metods.js";

export const skillGet = async (req = request, res = response) => {
    const {limite, desde} = req.query;
    const query = {status: true};

    const [total, skills] = await Promise.all([
        Skill.countDocuments(query),
        Skill.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);

    res.status(200).json({
        total,
        skills
    });
}

export const getSkillById = async (req, res) => {
    const {id} = req.params;
    const skill = await Skill.findOne({_id: id});

    res.status(200).json({
        skill
    })
}

export const createSkill = async (req, res) => {
    try {
        const {skill, porcent} = req.body;
        const user = await isToken(req, res);
        if (!user){
            return;
        }

        const skillMetod = new Skill({skill, porcent});
        await skillMetod.save();
        res.status(200).json({msg: `Skill: ${skillMetod.skill} || Porcentaje: ${skillMetod.porcent}.`});
    } catch (error) {
        console.error('Error al crear la habilidad:', error);
        res.status(500).json({ msg: 'Hubo un error al crear la habilidad.' });
    }
}

export const updateSkill = async (req, res) => {
    try {
        const {id} = req.params;
        const {skill, porcent} = req.body;
        const user = await isToken(req, res);
        if (!user){
            return;
        }

        const skillMetod = await Skill.findOne({_id: id});
        if (!skillMetod){
            return res.status(400).json({msg: 'La habilidad no existe.'});
        }

        skillMetod.skill = skill;
        skillMetod.porcent = porcent;
        await skillMetod.save();
        res.status(200).json({msg: `Skill: ${skill.skill} || Porcentaje: ${skill.porcent}.`});
    } catch (error) {
        console.error('Error al actualizar la habilidad:', error);
        res.status(500).json({ msg: 'Hubo un error al actualizar la habilidad.' });
    }
}

export const deleteSkill = async (req, res) => {
    try {
        const {skill} = req.body;
        const user = await isToken(req, res);
        if (!user){
            return;
        }
        const skillMetod = await Skill.findOne({skill: skill});
        if (!skillMetod) {
            return res.status(400).json({ msg: 'La habilidad no existe.' });
        }

        skillMetod.status = false;
        await skillMetod.save();
        res.status(200).json({ msg: `Habilidad: ${skillMetod.skill} eliminada.`});
    } catch (error) {
        console.error('Error al eliminar la habilidad:', error);
        res.status(500).json({ msg: 'Hubo un error al eliminar la habilidad.' });
    }
}