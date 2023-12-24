import { createContext, useState } from 'react';

export const ShareEmailContext = createContext();

const ShareEmailProvider = ({ children }) => {
	const [isShareEmail, setIsShareEmail] = useState(false);

	return (
		<ShareEmailContext.Provider value={{ isShareEmail, setIsShareEmail }}>
			{children}
		</ShareEmailContext.Provider>
	);
};

export default ShareEmailProvider;
