import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/blog/v1',
    timeout: 5000
});

export const getExp = async () => {
    try {
        return await api.get('/exp');
    } catch (error) {
        
    }
}

export const getSkills = async () => {
    try {
        return await api.get('/skill');
    } catch (error) {
        
    }
}

export const getProyects = async () => {
    try {
        return await api.get('/proyect');
    } catch (error) {
        
    }
}