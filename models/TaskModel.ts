import mongoose, { Model, Schema } from 'mongoose';
import { Task } from '../interfaces';

export interface ITask extends Task {}

const TaskSchema = new Schema({
	description: { type: String, require: true },
	status: {
		type: String,
		enum: {
			values: ['to-do', 'in-progress', 'done'],
			message: '{VALUE} is not valid as status'
		},
		default: 'to-do'
	},
	createdAt: { type: Number }
});

const TaskModel: Model<ITask> = mongoose.models.Task || mongoose.model('Task', TaskSchema);

export default TaskModel;
