export interface Task {
	_id: string;
	description: string;
	status: TaskStatus;
	createdAt: number;
}

type TaskStatus = 'to-do' | 'in-progress' | 'done';
