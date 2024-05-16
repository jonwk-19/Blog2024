import { Schema, model, now } from "mongoose";

const SkillSchema = Schema({
    skill: {
        type: String,
        required: [true, 'The skill is required']
    },
    status: {
        type: Boolean,
        default: true,
    },
    porcent: {
        type: Number,
        required: [true, 'The porcent is required']
    },
});

export default model('Skill', SkillSchema);