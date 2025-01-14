import { createSlice } from '@reduxjs/toolkit'

const ThemeSlice = createSlice({
	name: 'theme',
	initialState: {
		theme: true,
	},
	reducers: {
		ThemeToogle: (state, action) => {
			state.theme = action.payload
		},
	},
})

export const { ThemeToogle } = ThemeSlice.actions
export default ThemeSlice.reducer
