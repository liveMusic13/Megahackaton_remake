import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const focusObject = createSlice({
	name: 'focusObject',
	initialState,
	reducers: {
		addFocusNews: (state, { payload }) => {
			state.push({ id: payload });
		},
		deleteFocusNews: (state, { payload }) => {
			return state.filter(news => news.id !== payload);
		},
		deleteAllFocus: (state, { payload }) => {
			return [];
		},
	},
});

export const { actions, reducer } = focusObject;
