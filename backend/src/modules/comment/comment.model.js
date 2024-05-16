import {Schema, model, now} from 'mongoose';

const CommentSchema = Schema({
  user: {
    type: String,
    default: "Guest_User",
  },
  date:{
    type: Date,
    default: Date.now
  },
  proyectId: {
    type: Schema.Types.ObjectId,
    ref: 'Proyect',
    required: [true, 'The proyectId is required']
  },
  comment: {
    type: String,
    required: [true, "The comment is required"],
  },
  img: {
    type: String,
  },
  estado: {
    type: Boolean,
    default: true,
  },
});

export default model('Comment', CommentSchema);