export interface Task {
	_id: string;
	description: string;
	status: TaskStatus;
	createdAt: number;
}

export type TaskStatus = 'to-do' | 'in-progress' | 'done';
