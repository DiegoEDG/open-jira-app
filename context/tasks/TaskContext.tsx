import { createContext } from 'react';
import { Task } from '../../interfaces';

export interface TaskContextProps {
	tasks: Task[];
	// Methods
	AddNewTask: (description: string) => void;
	UpdateTaskStatus: (taskUpdated: Task) => void;
}

export const TaskContext = createContext({} as TaskContextProps);
