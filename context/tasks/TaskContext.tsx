import { createContext } from 'react';
import { Task } from '../../interfaces';

export interface TaskContextProps {
	tasks: Task[];
}

export const TaskContext = createContext({} as TaskContextProps);
