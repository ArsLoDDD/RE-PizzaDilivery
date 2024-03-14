import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPizza } from '../../types/pizzaTypes'

export type PizzaFilterKey = keyof IPizza

interface IMenusState {
	isMobileMenuOpen: boolean
	typeOfPizzaSelected: PizzaFilterKey | 'All'
	initialPizzasArray: IPizza[]
	currentPizzasArray: IPizza[]
}

const initialState: IMenusState = {
	isMobileMenuOpen: false,
	typeOfPizzaSelected: 'All',
	initialPizzasArray: [],
	currentPizzasArray: [],
}

const menusSlice = createSlice({
	name: 'menus',
	initialState,
	reducers: {
		toggleMobileMenuStatus: (state, action: PayloadAction<boolean>) => {
			state.isMobileMenuOpen = action.payload
		},
		setTypeOfPizzaSelected: (
			state,
			action: PayloadAction<PizzaFilterKey | 'All'>
		) => {
			state.typeOfPizzaSelected = action.payload
			if (action.payload === 'All') {
				state.currentPizzasArray = state.initialPizzasArray
				return
			}
			const filterKey = action.payload as PizzaFilterKey
			state.currentPizzasArray = state.initialPizzasArray.filter(
				(pizza: IPizza) => pizza[filterKey] === true
			)
			console.log(state.typeOfPizzaSelected)
		},
		setInitialPizzasArray: (state, action: PayloadAction<IPizza[]>) => {
			state.initialPizzasArray = action.payload
		},
		setCurrentPizzasArray: (state, action: PayloadAction<IPizza[]>) => {
			state.currentPizzasArray = action.payload
		},
	},
})

export const {
	toggleMobileMenuStatus,
	setTypeOfPizzaSelected,
	setInitialPizzasArray,
	setCurrentPizzasArray,
} = menusSlice.actions
export default menusSlice.reducer
