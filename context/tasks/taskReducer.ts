import { Task } from '../../interfaces';
import { TaskState } from './TaskProvider';

type TaskActionType =
	| {
			type: '[Task] New Task';
			payload: Task;
	  }
	| { type: '[Task] Delete Task'; payload: Task };

const taskReducer = (state: TaskState, action: TaskActionType): TaskState => {
	switch (action.type) {
		case '[Task] New Task':
			return {
				...state,
				tasks: [...state.tasks, action.payload]
			};
			break;
		default:
			return state;
			break;
	}
};

export default taskReducer;
