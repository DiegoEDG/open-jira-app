import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import { connectDB, disconnectDB } from '../../../../database/db';
import { TaskModel } from '../../../../models';
import { ITask } from '../../../../models/TaskModel';

type Data = { message: string } | ITask;

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
	switch (req.method) {
		case 'GET':
			return getTask(req, res);
		case 'PUT':
			return updateTask(req, res);
		case 'DELETE':
			return deleteTask(req, res);

		default:
			break;
	}
}

const getTask = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const { id } = req.query;
	if (!mongoose.isValidObjectId(id)) {
		return res.status(404).json({ message: 'ID not valid' });
	}

	try {
		connectDB();
		const task = await TaskModel.findById(id);
		return res.status(200).json(task!);
	} catch (err) {
		disconnectDB();
		return res.status(400).json({ message: 'Something was wrong' });
	}
};

const updateTask = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const { id } = req.query;
	if (!mongoose.isValidObjectId(id)) {
		return res.status(404).json({ message: 'ID not valid' });
	}

	try {
		connectDB();
		const taskToUpdate = await TaskModel.findById(id);
		const { description = taskToUpdate!.description, status = taskToUpdate!.status } = req.body;
		const taskUpdated = await TaskModel.findOneAndUpdate(
			taskToUpdate!.id,
			{ description, status },
			{
				new: true,
				runValidators: true
			}
		);
		console.log('Task updated successfully');
		disconnectDB();
		return res.status(200).json(taskUpdated!);
	} catch (err) {
		disconnectDB();
		return res.status(400).json({ message: 'Something was wrong' });
	}
};

const deleteTask = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const { id } = req.query;
	if (!mongoose.isValidObjectId(id)) {
		return res.status(404).json({ message: 'ID not valid' });
	}

	try {
		connectDB();
		const taskToDelete = await TaskModel.findByIdAndRemove(id);
		console.log(taskToDelete);
		return res.status(200).json({ message: 'Task deleted successfully' });
	} catch (err) {
		disconnectDB();
		console.log(err);
		return res.status(400).json({ message: 'Something was wrong' });
	}
};
