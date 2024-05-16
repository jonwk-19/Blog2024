import {Schema, model} from 'mongoose';

const ExpSchema = Schema({
    place: {
        type: String,
        required: [true, 'The place is required']
    },
    timePeriod: {
        type: String,
        required: [true, 'The time period is required']
    },
    description: {
        type: String,
        required: [true, 'The description is required']
    },
    status: {
        type: Boolean,
        default: true,
    },
});

export default model('Exp', ExpSchema);