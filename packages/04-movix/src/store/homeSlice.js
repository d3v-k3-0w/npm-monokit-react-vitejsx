import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
	name: 'home',
	initialState: {
		url: {},
		genres: {},
	},

	reducers: {
		getApiConfiguration: (state, action) => {
			state.url = action.payload;
		},
		getGenres: (state, action) => {
			state.genres = action.payload;
		},
	},
});

//++ los Action Creators se generan para cada función reductora de casos.
export const { getApiConfiguration, getGenres } = homeSlice.actions;

export default homeSlice.reducer;
