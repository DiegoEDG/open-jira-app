import { FC, PropsWithChildren, useEffect, useReducer } from 'react';
import taskReducer from './taskReducer';
import { TaskContext } from './TaskContext';
import { Task } from '../../interfaces';
import { v4 as uuid } from 'uuid';
import { tasksApi } from '../../apis';
import { ITask } from '../../models/TaskModel';

export interface TaskState {
	tasks: Task[];
}

const TASK_INITIAL_STATE: TaskState = {
	tasks: []
};

const TaskProvider: FC<PropsWithChildren> = ({ children }) => {
	const [state, dispatch] = useReducer(taskReducer, TASK_INITIAL_STATE);

	const getTasks = async () => {
		const { data } = await tasksApi.get<ITask[]>('/tasks');
		dispatch({ type: '[Task] Refresh Data', payload: data });
	};

	useEffect(() => {
		getTasks();
	}, []);

	const AddNewTask = (description: string) => {
		const newTask: Task = {
			_id: uuid(),
			description,
			status: 'to-do',
			createdAt: Date.now()
		};

		dispatch({ type: '[Task] New Task', payload: newTask });
	};

	const UpdateTaskStatus = (taskUpdated: Task) => {
		dispatch({ type: '[Task] Update Task', payload: taskUpdated });
	};

	return (
		<TaskContext.Provider
			value={{
				...state,
				//  Methods
				AddNewTask,
				UpdateTaskStatus
			}}
		>
			{children}
		</TaskContext.Provider>
	);
};

export default TaskProvider;
