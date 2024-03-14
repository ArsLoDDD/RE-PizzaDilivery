import { combineReducers } from 'redux'
import cartSlice from './slices/cartSlice'
import menusSlice from './slices/menusSlice'
import createPizzaSlice from './slices/createPizzaSlice'

const rootReducer = combineReducers({
	cart: cartSlice,
	menus: menusSlice,
	createdPizza: createPizzaSlice,
})

export default rootReducer
