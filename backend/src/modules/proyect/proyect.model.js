import {Schema, model, now} from 'mongoose';

const ProyectSchema = Schema({
    title: {
        type: String,
        required: [true, 'The title is required']
    },
    subTitle: {
        type: String,
        
    },
    author: {
        type: String,
        default: 'Jonwk'
    },
    description: {
        type: String,
        required: [true, 'The description is required']
    },
    img: {
        type: String,
    },
    status: {
        type: Boolean,
        default: true,
    },
    timePeriod: {
        type: String,
        required: [true, 'The time period is required']
    },
    technologies: {
        type: String,
        required: [true, 'The technologies are required']
    },
});

export default model('Proyect', ProyectSchema);