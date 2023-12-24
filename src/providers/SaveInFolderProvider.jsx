import { createContext, useState } from 'react';

export const SaveInFolderContext = createContext();

const SaveInFolderProvider = ({ children }) => {
	const [isSaveInFolder, setIsSaveInFolder] = useState(false);

	return (
		<SaveInFolderContext.Provider value={{ isSaveInFolder, setIsSaveInFolder }}>
			{children}
		</SaveInFolderContext.Provider>
	);
};

export default SaveInFolderProvider;
