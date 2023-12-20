import { createContext, useState } from 'react';

export const EditingNewsTestContext = createContext();

const EditingNewsTestProvider = ({ children }) => {
	const [editingNews, setEditingNews] = useState();

	return (
		<EditingNewsTestContext.Provider value={{ editingNews, setEditingNews }}>
			{children}
		</EditingNewsTestContext.Provider>
	);
};

export default EditingNewsTestProvider;
