import { TaskState } from './TaskProvider';

type TaskActionType = { type: '[Task]' };

const taskReducer = (state: TaskState, action: TaskActionType): TaskState => {
	switch (action.type) {
		case '[Task]':
			return {
				...state
			};
			break;
		default:
			return state;
			break;
	}
};

export default taskReducer;
