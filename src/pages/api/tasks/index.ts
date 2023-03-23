import type { NextApiRequest, NextApiResponse } from 'next';
import { TaskModel } from '../../../../models';
import { ITask } from '../../../../models/TaskModel';

type Data = { message: string } | ITask[];

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
	switch (req.method) {
		case 'GET':
			return getTasks(res);

		default:
			return res.status(400).json({ message: 'Enpoint doesnt exist' });
	}
}

const getTasks = async (res: NextApiResponse<Data>) => {
	const tasks = await TaskModel.find().sort({ createdAt: 'ascending' });
	return res.status(200).json(tasks);
};
