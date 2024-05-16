import User from "../modules/user/user.model.js";
import Role from "../modules/role/role.model.js";
import Proyect from "../modules/proyect/proyect.model.js";
import Comment from "../modules/comment/comment.model.js";

export const existentEmail = async (mail = '') => {
    console.log('');
    console.log('--- [NOTES] existentEmail.db-validators');
    try {
        const existMail = await User.findOne({mail});
        if(existMail){
            throw new Error(`El email ${ mail } ya fue registrado`);
        }
    } catch (error) {
        console.log('Error al buscar usuario por correo electrónico:', error);
        //console.error('Error al buscar usuario por correo electrónico:', error);
        //throw error; 
    }
}

export const existentUserById = async ( id = '') => {
    console.log('');
    console.log('--- [NOTES] existentUserById.db-validators');
    try {
        const existUser = await User.findOne({id});
        if(existUser){
            throw new Error(`El usuario con el ${ id } no existe`);
        }
    } catch (error) {
        console.log('Error al buscar usuario por id:', error);
        //console.error('Error al buscar usuario por id:', error);
        //throw error;
    }
}

export const roleValid = async (role='') => {
    console.log('');
    console.log('--- [NOTES] roleValid.db-validators');
    try {
        const existRole = await Role.findOne({role});
        if(!existRole){
            throw new Error(`El role ${ role } no existe en base de datos.` )
        }
    } catch (error) {
        console.log('Error al buscar role:', error);
        //console.error('Error al buscar role:', error);
        //throw error;
    }
}

export const existentProyectById = async ( id = '') => {
    console.log('');
    console.log('--- [NOTES] existentProyectById.db-validators');
    try {
        const existProyect = await Proyect.findOne({id});
        if(!existProyect){
            throw new Error(`El proyecto con el ${ id } no existe`);
        }
    }catch (error) {
        console.log('Error al buscar proyecto por id:', error);
        //console.error('Error al buscar proyecto por id:', error);
        //throw error;
    }
}


export const existUserByEmail  = async (correo='') => {
    console.log('');
    console.log('--- [NOTES] existUserByEmail.db-validators');
    try {
        const user = await User.findOne({correo});
        if (user) {
            return {
                id: user._id,
                name: user.name,
                email: user.mail,
                status: user.estado
            };
        } else {
            console.log(`El user ${ correo } no existe en base de datos.` );
            //throw new Error(`El user ${ correo } no existe en base de datos.` );
            return null; 
        }
    } catch (error) {
        console.log('Error al buscar usuario por correo electrónico:', error);
        //console.error('Error al buscar usuario por correo electrónico:', error);
        throw error; 
    }
}


