import { configureStore } from '@reduxjs/toolkit'
import ThemeSlice from './theme/reducer'

export const store = configureStore({
	reducer: {
		theme: ThemeSlice,
	},
})
