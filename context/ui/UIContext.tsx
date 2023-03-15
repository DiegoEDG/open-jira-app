import { createContext } from 'react';

export interface UIContextProps {
	isSidebarOpen: boolean;
	// Methods
	OpenSidebar: () => void;
	CloseSidebar: () => void;
}

export const UIContext = createContext({} as UIContextProps);
