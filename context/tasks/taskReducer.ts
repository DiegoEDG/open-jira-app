import { PlaylistAddOutlined } from '@mui/icons-material';
import { Task } from '../../interfaces';
import { TaskState } from './TaskProvider';

type TaskActionType =
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
			break;
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
			break;
		default:
			return state;
			break;
	}
};

export default taskReducer;
