import { PlaylistAddOutlined } from '@mui/icons-material';
import { Task } from '../../interfaces';
import { TaskState } from './TaskProvider';

type TaskActionType =
	| { type: '[Task] Refresh Data'; payload: Task[] }
	| { type: '[Task] New Task'; payload: Task }
	| { type: '[Task] Update Task'; payload: Task }
	| { type: '[Task] Delete Task'; payload: Task };

const taskReducer = (state: TaskState, action: TaskActionType): TaskState => {
	switch (action.type) {
		case '[Task] New Task':
			return {
				...state,
				tasks: [...state.tasks, action.payload]
			};
		case '[Task] Update Task':
			return {
				...state,
				tasks: state.tasks.map((task) => {
					if (task._id === action.payload._id) {
						task.status = action.payload.status;
					}
					return task;
				})
			};
		case '[Task] Refresh Data':
			return {
				...state,
				tasks: [...action.payload]
			};
		default:
			return state;
	}
};

export default taskReducer;
