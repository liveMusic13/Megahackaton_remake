import { useContext } from 'react';
import { EditingNewsTestContext } from '../providers/EditingNewsTestProvider';

export const useEditingNewsTest = () => useContext(EditingNewsTestContext);
