import { FC, PropsWithChildren, useEffect, useReducer } from 'react';
import taskReducer from './taskReducer';
import { TaskContext } from './TaskContext';
import { Task } from '../../interfaces';
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

	const AddNewTask = async (description: string) => {
		const { data } = await tasksApi.post<ITask>('/tasks', { description });
		dispatch({ type: '[Task] New Task', payload: data });
	};

	const UpdateTask = async ({ _id, description, status }: Task) => {
		const { data } = await tasksApi.put<ITask>(`/tasks/${_id}`, { description, status });
		dispatch({ type: '[Task] Update Task', payload: data });
	};

	const DeleteTask = (task: Task) => {
		dispatch({ type: '[Task] Delete Task', payload: task });
	};

	return (
		<TaskContext.Provider
			value={{
				...state,
				//  Methods
				AddNewTask,
				UpdateTask,
				DeleteTask
			}}
		>
			{children}
		</TaskContext.Provider>
	);
};

export default TaskProvider;
