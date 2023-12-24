import { useContext } from 'react';
import { SaveInFolderContext } from '../providers/SaveInFolderProvider';

export const useSaveInFolder = () => useContext(SaveInFolderContext);
