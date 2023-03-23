// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectDB, disconnectDB } from '../../../database';
import { SeedData } from '../../../database/seed';
import { TaskModel } from '../../../models';

type Data = {
	message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	connectDB();
	await TaskModel.deleteMany();
	await TaskModel.insertMany(SeedData.tasks);
	res.json({ message: 'Data created successfully' });
	disconnectDB();
}
