import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const folderFocus = createSlice({
	name: 'folderFocus',
	initialState,
	reducers: {
		addFolderFocusNews: (state, { payload }) => {
			return [{ id: payload }];
		},
		deleteFolder: (state, { payload }) => {
			return [];
		},
	},
});

export const { actions, reducer } = folderFocus;
