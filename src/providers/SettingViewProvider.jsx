import { createContext, useState } from 'react';

export const SettingViewContext = createContext();

const SettingViewProvider = ({ children }) => {
	const [isSettingView, setIsSettingView] = useState(false);

	return (
		<SettingViewContext.Provider value={{ isSettingView, setIsSettingView }}>
			{children}
		</SettingViewContext.Provider>
	);
};

export default SettingViewProvider;
