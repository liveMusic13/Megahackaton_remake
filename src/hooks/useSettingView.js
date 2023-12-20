import { useContext } from 'react';
import { SettingViewContext } from '../providers/SettingViewProvider';

export const useSettingView = () => useContext(SettingViewContext);
