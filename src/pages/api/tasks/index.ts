import type { NextApiRequest, NextApiResponse } from 'next';
import { TaskModel } from '../../../../models';
import { ITask } from '../../../../models/TaskModel';
import { connectDB, disconnectDB } from '../../../../database/db';

type Data = { message: string } | ITask[] | ITask;

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
	switch (req.method) {
		case 'GET':
			return getTasks(res);
		case 'POST':
			return saveTask(req, res);

		default:
			return res.status(400).json({ message: 'Enpoint doesnt exist' });
	}
}

const getTasks = async (res: NextApiResponse<Data>) => {
	connectDB();
	const tasks = await TaskModel.find().sort({ createdAt: 'ascending' });
	disconnectDB();
	return res.status(200).json(tasks);
};

const saveTask = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const { description } = req.body;
	const newTask = new TaskModel({
		description,
		createdAt: Date.now()
	});
	try {
		connectDB();
		const taskCreated = await TaskModel.create(newTask);
		disconnectDB();
		return res.status(201).json(taskCreated);
	} catch (err) {
		disconnectDB();
		console.log(err);
		return res.status(400).json({ message: 'Bad request' });
	}
};
