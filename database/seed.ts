import { Task } from '../interfaces';

interface SeedData {
	tasks: SeedTask[];
}

interface SeedTask {
	description: string;
	status: string;
	createdAt: number;
}

export const SeedData: SeedData = {
	tasks: [
		{
			description: 'Aliqua qui in est ut et.',
			status: 'to-do',
			createdAt: Date.now()
		},
		{
			description: 'Pariatur ut esse ipsum exercitation elit duis Lorem elit officia amet anim.',
			status: 'in-progress',
			createdAt: Date.now() - 1000000
		},
		{
			description: 'Eu irure ipsum et ipsum.',
			status: 'done',
			createdAt: Date.now() - 500000
		}
	]
};
