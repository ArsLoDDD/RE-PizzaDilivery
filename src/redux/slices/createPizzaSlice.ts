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
		}
		crust: {
			crustValue: CrustValue
			crustPrice: number
		}
		toppingStyle: ToppingStyle
		leftSideToppings?: ToppingSide
		// rightSideToppings?: ToppingSide
	}
}

const initialState: ICreatePizzaOrder = {
	createdPizza: {
		size: {
			sizeValue: SizeValue.EXTRA_SMALL,
			sizePrice: 55.99,
		},
		crust: {
			crustValue: CrustValue.CLASSIC,
			crustPrice: 0,
		},
		toppingStyle: ToppingStyle.FIRST,
	},
}

const createPizzaSlice = createSlice({
	name: 'createPizza',
	initialState,
	reducers: {
		setSize: (state, action: PayloadAction<SizeValue>) => {
			state.createdPizza.size.sizeValue = action.payload
			state.createdPizza.size.sizePrice = action.payload
		},
		setCrust: (state, action: PayloadAction<CrustValue>) => {
			state.createdPizza.crust.crustValue = action.payload
		},
		setToppingStyle: (state, action: PayloadAction<ToppingStyle>) => {
			state.createdPizza.toppingStyle = action.payload
			console.log(
				'state.createdPizza.toppingStyle',
				state.createdPizza.toppingStyle
			)
		},
		postOrder: state => {
			console.log('postOrder', state.createdPizza)
		},
		clearCreatedPizza: state => {
			state.createdPizza = initialState.createdPizza
		},
		setLeftSideToppings: (state, action: PayloadAction<ToppingSide>) => {
			state.createdPizza.leftSideToppings = action.payload
		},
	},
})

export const {
	setSize,
	setCrust,
	setToppingStyle,
	clearCreatedPizza,
	postOrder,
} = createPizzaSlice.actions
export default createPizzaSlice.reducer
