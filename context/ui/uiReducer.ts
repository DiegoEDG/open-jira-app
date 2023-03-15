import { UIState } from './UIProvider';

type UIActionType = { type: '[UI] Open Sidebar' } | { type: '[UI] Close Sidebar' };

const uiReducer = (state: UIState, action: UIActionType): UIState => {
	switch (action.type) {
		case '[UI] Open Sidebar':
			return {
				...state,
				isSidebarOpen: true
			};
			break;
		case '[UI] Close Sidebar':
			return {
				...state,
				isSidebarOpen: false
			};
			break;

		default:
			return state;
			break;
	}
};
export default uiReducer;
