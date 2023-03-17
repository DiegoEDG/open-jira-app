import { FC, PropsWithChildren, useReducer } from 'react';
import taskReducer from './taskReducer';
import { TaskContext } from './TaskContext';
import { Task } from '../../interfaces';
import { v4 as uuid } from 'uuid';

export interface TaskState {
	tasks: Task[];
}

const TASK_INITIAL_STATE: TaskState = {
	tasks: [
		{
			_id: uuid(),
			description: 'Aliqua qui in est ut et.',
			status: 'to-do',
			createdAt: Date.now()
		},
		{
			_id: uuid(),
			description: 'Pariatur ut esse ipsum exercitation elit duis Lorem elit officia amet anim.',
			status: 'in-progress',
			createdAt: Date.now() - 1000000
		},
		{
			_id: uuid(),
			description: 'Eu irure ipsum et ipsum.',
			status: 'done',
			createdAt: Date.now() - 500000
		}
	]
};

const TaskProvider: FC<PropsWithChildren> = ({ children }) => {
	const [state, dispatch] = useReducer(taskReducer, TASK_INITIAL_STATE);

	const AddNewTask = (description: string) => {
		const newTask: Task = {
			_id: uuid(),
			description,
			status: 'to-do',
			createdAt: Date.now()
		};

		dispatch({ type: '[Task] New Task', payload: newTask });
	};

	return (
		<TaskContext.Provider
			value={{
				...state,
				//  Methods
				AddNewTask
			}}
		>
			{children}
		</TaskContext.Provider>
	);
};

export default TaskProvider;
