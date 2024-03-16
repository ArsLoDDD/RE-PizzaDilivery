import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPizza } from '../../types/pizzaTypes'
import { data } from '../../apis/DB/pizzasData'
import { ICreatePizzaOrder } from './createPizzaSlice'

export interface cartItem {
	data: IPizza
	count: number
}

interface ICartState {
	cartItems: cartItem[]
	customPizzas: ICreatePizzaOrder[]
	cartItemsCount: number
	cartPriceTotal: number
}

const initialState: ICartState = {
	cartItems: [],
	customPizzas: [],
	cartItemsCount: 0,
	cartPriceTotal: 0,
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		clearCart: state => {
			state.cartItems = []
			state.customPizzas = []
			state.cartItemsCount = 0
			state.cartPriceTotal = 0
		},
		addToCart: (state, action: PayloadAction<IPizza>) => {
			const index = state.cartItems.findIndex(
				item => item.data.id === action.payload.id
			)
			if (index !== -1) {
				state.cartItems[index].count++
			} else {
				state.cartItems.push({ data: action.payload, count: 1 })
			}
			state.cartItemsCount++
			state.cartPriceTotal += action.payload.price
		},
		addCustomPizzaToCart: (state, action: PayloadAction<ICreatePizzaOrder>) => {
			state.customPizzas.push(action.payload)
			state.cartItemsCount++
			state.cartPriceTotal +=
				action.payload.createdPizza.mainIngredientsPrice +
				action.payload.createdPizza.otherToppingPriceLeft +
				action.payload.createdPizza.otherToppingPriceRight
		},
		decrementItem: (state, action: PayloadAction<number>) => {
			const index = state.cartItems.findIndex(
				item => item.data.id === action.payload
			)
			if (index !== -1) {
				state.cartItems[index].count--
				state.cartItemsCount--
				state.cartPriceTotal -= state.cartItems[index].data.price
				if (state.cartItems[index].count === 0) {
					state.cartItems.splice(index, 1)
				}
			}
		},
		incrementItem: (state, action: PayloadAction<number>) => {
			const index = state.cartItems.findIndex(
				item => item.data.id === action.payload
			)
			if (index !== -1) {
				state.cartItems[index].count++
				state.cartItemsCount++
				state.cartPriceTotal += state.cartItems[index].data.price
			}
		},
		sendOrder: state => {
			const pizzaArray = state.cartItems.map(item => {
				return {
					itemName: item.data.name,
					itemCount: item.count,
				}
			})
			const order = {
				orderItems: [pizzaArray, ...state.customPizzas],
				orderTotalPrice: state.cartPriceTotal,
			}
			console.log('Order sent', order)
		},
	},
})

export const {
	clearCart,
	addToCart,
	incrementItem,
	decrementItem,
	sendOrder,
	addCustomPizzaToCart,
} = cartSlice.actions
export default cartSlice.reducer
