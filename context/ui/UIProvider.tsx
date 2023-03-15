import { FC, PropsWithChildren, useReducer } from 'react';
import { UIContext } from './UIContext';
import uiReducer from './uiReducer';

export interface UIState {
	isSidebarOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
	isSidebarOpen: false
};

const UIProvider: FC<PropsWithChildren> = ({ children }) => {
	const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

	const OpenSidebar = () => {
		dispatch({ type: '[UI] Open Sidebar' });
	};
	const CloseSidebar = () => {
		dispatch({ type: '[UI] Close Sidebar' });
	};

	return (
		<UIContext.Provider
			value={{
				...state,
				OpenSidebar,
				CloseSidebar
			}}
		>
			{children}
		</UIContext.Provider>
	);
};

export default UIProvider;
