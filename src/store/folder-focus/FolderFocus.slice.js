import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const folderFocus = createSlice({
	name: 'folderFocus',
	initialState,
	reducers: {
		addFolderFocusNews: (state, { payload }) => {
			return [{ id: payload }];
		},
	},
});

export const { actions, reducer } = folderFocus;
