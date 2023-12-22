import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as focusObject } from './focus-object/FocusObject.slice';
import { reducer as folderFocus } from './folder-focus/FolderFocus.slice';
import { reducer as interlayer } from './interlayer/Interlayer.slice';
import { reducer as users } from './users/Users.slice';

const reducers = combineReducers({
	users: users,
	interlayer: interlayer,
	focusObject: focusObject,
	folderFocus: folderFocus,
});

export const store = configureStore({
	reducer: reducers,
});
