import { Pressable, StyleSheet, Text, View } from 'react-native'
import CreatePizzaToppingPart from './CreatePizzaToppingPart/CreatePizzaToppingPart'
import CreatePizzaSauce from './CreatePizzaSauce/CreatePizzaSauce'
import { useEffect, useState } from 'react'
import { ToppingPart } from './CreatePizzaToppingPart/CreatePizzaToppingPartItem/CreatePizzaToppingPartItem'
import {
	ICreatePizzaOrder,
	SauceValue,
	ToppingSide,
	clearCreatedPizza,
	setLeftSideToppingsState,
	setRightSideToppingsState,
} from '../../../../redux/slices/createPizzaSlice'
import CreatePizzaOtherToppings from './CreatePizzaOtherToppings/CreatePizzaOtherToppings'
import CartBtn from '../../CartBtn/CartBtn'
import CartBtnContent from '../../CartBtn/CartBtnContent/CartBtnContent'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../redux/store'
import { mainDark, orangeGradient } from '../../../../utils/constants'
import { useNavigate } from 'react-router'
import { addCustomPizzaToCart } from '../../../../redux/slices/cartSlice'

const CreatePizzaContentSecondStep: React.FC = () => {
	const [currentPart, setCurrentPart] = useState<ToppingPart>(ToppingPart.LEFT)
	const [leftSideToppings, setLeftSideToppings] = useState<ToppingSide>({
		sauce: SauceValue.TOMATO,
		toppings: [],
	})
	const [rightSideToppings, setRightSideToppings] = useState<ToppingSide>({
		sauce: SauceValue.TOMATO,
		toppings: [],
	})
	const createdPizzaObj = useSelector(
		(state: RootState) => state.createdPizza.createdPizza
	)
	const otherToppingPriceLeft = useSelector(
		(state: RootState) => state.createdPizza.createdPizza.otherToppingPriceLeft
	)
	const otherToppingPriceRight = useSelector(
		(state: RootState) => state.createdPizza.createdPizza.otherToppingPriceRight
	)
	const mainIngredientsPrice = useSelector(
		(state: RootState) => state.createdPizza.createdPizza.mainIngredientsPrice
	)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const setSideTippings = (side: ToppingPart, toppings: ToppingSide) => {
		if (side === ToppingPart.LEFT) {
			setLeftSideToppings(toppings)
			dispatch(setLeftSideToppingsState(toppings))
		} else {
			setRightSideToppings(toppings)
			dispatch(setRightSideToppingsState(toppings))
		}
	}

	const handlePostOrder = () => {
		const orderObj: ICreatePizzaOrder = {
			createdPizza: createdPizzaObj,
		}
		console.log('orderObj', orderObj)
		dispatch(addCustomPizzaToCart(orderObj))
		dispatch(clearCreatedPizza())
		navigate('/')
	}

	// useEffect(() => {
	// 	console.log('leftSideToppings', leftSideToppings)
	// 	console.log('rightSideToppings', rightSideToppings)
	// }, [leftSideToppings, rightSideToppings])

	return (
		<View style={styles.innerContent}>
			<CreatePizzaToppingPart
				currentPart={currentPart}
				setCurrentPart={setCurrentPart}
			/>
			<CreatePizzaSauce
				currentPart={currentPart}
				setSideTippings={setSideTippings}
				leftSideToppings={leftSideToppings}
				rightSideToppings={rightSideToppings}
			/>
			<CreatePizzaOtherToppings
				currentPart={currentPart}
				setSideTippings={setSideTippings}
				leftSideToppings={leftSideToppings}
				rightSideToppings={rightSideToppings}
			/>

			<Pressable
				onPress={() => handlePostOrder()}
				style={({ pressed }) => [
					{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						width: '100%',
						backgroundColor: pressed ? '#24262F60' : '#24262F',
						paddingVertical: 5,
						borderRadius: 40,
					},
				]}
			>
				<View
					style={{
						width: '45%',
					}}
				>
					<Text
						style={{
							textAlign: 'center',
							fontSize: 24,
							fontWeight: 'bold',
							color: orangeGradient,
						}}
					>
						Add To Cart
					</Text>
				</View>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'flex-end',
						marginRight: 5,
						width: '50%',
					}}
				>
					<CartBtnContent
						isBig={true}
						cartItemsCount={null}
						cartPriceTotal={
							otherToppingPriceRight +
							otherToppingPriceLeft +
							mainIngredientsPrice
						}
					/>
				</View>
			</Pressable>
		</View>
	)
}
const styles = StyleSheet.create({
	innerContent: {
		width: '90%',
	},
})
export default CreatePizzaContentSecondStep
