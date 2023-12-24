import { useContext } from 'react';
import { ShareEmailContext } from '../providers/ShareEmailProvider';

export const useShareEmail = () => useContext(ShareEmailContext);
