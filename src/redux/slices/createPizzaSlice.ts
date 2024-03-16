import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IChoseItemPizzaCreate } from '../../components/Main/CreatePizzaContent/CreatePizzaContentFrstStep/CreatePizzaSize/CreatePizzaSize'

export enum SizeValue {
	NULL = 0,
	EXTRA_SMALL = 7,
	SMALL = 9.5,
	MEDIUM = 11.5,
	LARGE = 13.5,
}

export enum CrustValue {
	CLASSIC = 'Classic',
	ITALIAN = 'Italian',
}

export enum CrustPrice {
	CLASSIC = 0,
	ITALIAN = 20,
}

export enum ToppingStyle {
	FIRST = 'first topping style',
	SECOND = 'second topping style',
}

export enum SauceValue {
	BBQ = 'BBQ',
	TOMATO = 'Tomato',
	GARLIC_HERB = 'Garlic Hurb',
}
export enum OtherToppings {
	PINEAPPLE = 'Pineapple',
	JALAPENO = 'Jalapenos',
	SWEET_CORN = 'Sweetcorn',
	PEPPERONI = 'Pepperoni',
	RED_ONION = 'Red Onion',
	ANCHOVIES = 'Anchovies',
	GROUND_BEEF = 'Ground Beef',
	CHICKEN_TIKKA = 'Chicken Tikka',
	MUSHROOM = 'Mushroom',
	TUNA = 'Tuna',
}
export interface ToppingSide {
	sauce: SauceValue
	toppings: IChoseItemPizzaCreate[]
}

export interface ICreatePizzaOrder {
	createdPizza: {
		size: {
			sizeValue: SizeValue
			sizePrice: number
			sizeName: string
		}
		crust: {
			crustValue: CrustValue
			crustPrice: CrustPrice
		}
		toppingStyle: ToppingStyle
		leftSideToppings?: ToppingSide
		rightSideToppings?: ToppingSide
		toppingCount: number
		otherToppingPriceLeft: number
		otherToppingPriceRight: number
	}
}

const initialState: ICreatePizzaOrder = {
	createdPizza: {
		size: {
			sizeValue: SizeValue.EXTRA_SMALL,
			sizePrice: 55.99,
			sizeName: '7 inch',
		},
		crust: {
			crustValue: CrustValue.CLASSIC,
			crustPrice: CrustPrice.CLASSIC,
		},
		toppingStyle: ToppingStyle.FIRST,
		toppingCount: 0,
		otherToppingPriceLeft: 0,
		otherToppingPriceRight: 0,
	},
}

const createPizzaSlice = createSlice({
	name: 'createPizza',
	initialState,
	reducers: {
		setSize: (state, action: PayloadAction<SizeValue>) => {
			console.log(action.payload)
			state.createdPizza.size.sizeValue = action.payload
			state.createdPizza.size.sizePrice = action.payload
		},
		setSizeName: (state, action: PayloadAction<string>) => {
			state.createdPizza.size.sizeName = action.payload
		},
		setCrust: (state, action: PayloadAction<CrustValue>) => {
			state.createdPizza.crust.crustValue = action.payload
			if (action.payload === CrustValue.ITALIAN) {
				state.createdPizza.crust.crustPrice = CrustPrice.ITALIAN
			}
		},
		setToppingStyle: (state, action: PayloadAction<ToppingStyle>) => {
			state.createdPizza.toppingStyle = action.payload
		},
		clearCreatedPizza: state => {
			state.createdPizza = initialState.createdPizza
		},
		setLeftSideToppingsState: (state, action: PayloadAction<ToppingSide>) => {
			state.createdPizza.leftSideToppings = action.payload
			state.createdPizza.otherToppingPriceLeft = action.payload.toppings.reduce(
				(acc, topping) => {
					return acc + topping.value
				},
				0
			)
			state.createdPizza.toppingCount = action.payload.toppings.length
		},
		setRightSideToppingsState: (state, action: PayloadAction<ToppingSide>) => {
			state.createdPizza.rightSideToppings = action.payload
			state.createdPizza.otherToppingPriceRight =
				action.payload.toppings.reduce((acc, topping) => {
					return acc + topping.value
				}, 0)
			state.createdPizza.toppingCount = action.payload.toppings.length
		},
	},
})

export const {
	setSize,
	setCrust,
	setToppingStyle,
	clearCreatedPizza,
	setLeftSideToppingsState,
	setRightSideToppingsState,
	setSizeName,
} = createPizzaSlice.actions
export default createPizzaSlice.reducer
