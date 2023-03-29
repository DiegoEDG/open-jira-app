import { isValidObjectId } from 'mongoose';
import { Task } from '../interfaces';
import { TaskModel } from '../models';
import { connectDB, disconnectDB } from './db';

const getTaskData = async (id: string): Promise<Task | null> => {
	if (!isValidObjectId(id)) return null;

	connectDB();
	const task = await TaskModel.findById(id).lean();
	const serializedTask = JSON.parse(JSON.stringify(task));
	disconnectDB();

	return serializedTask;
};
export default getTaskData;
