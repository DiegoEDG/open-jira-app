import { createContext } from 'react';
import { Task } from '../../interfaces';

export interface TaskContextProps {
	tasks: Task[];
	// Methods
	AddNewTask: (description: string) => void;
	UpdateTask: (taskUpdated: Task) => void;
}

export const TaskContext = createContext({} as TaskContextProps);
