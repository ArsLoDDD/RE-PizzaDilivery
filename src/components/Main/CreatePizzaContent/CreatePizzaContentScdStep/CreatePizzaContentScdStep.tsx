import { StyleSheet, Text, View } from 'react-native'
import CreatePizzaToppingPart from './CreatePizzaToppingPart/CreatePizzaToppingPart'
import CreatePizzaSauce from './CreatePizzaSauce/CreatePizzaSauce'
import { useEffect, useState } from 'react'
import { ToppingPart } from './CreatePizzaToppingPart/CreatePizzaToppingPartItem/CreatePizzaToppingPartItem'
import {
	SauceValue,
	ToppingSide,
} from '../../../../redux/slices/createPizzaSlice'
import CreatePizzaOtherToppings from './CreatePizzaOtherToppings/CreatePizzaOtherToppings'

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

	const setSideTippings = (side: ToppingPart, toppings: ToppingSide) => {
		if (side === ToppingPart.LEFT) {
			setLeftSideToppings(toppings)
		} else {
			setRightSideToppings(toppings)
		}
	}

	useEffect(() => {
		console.log('leftSideToppings', leftSideToppings)
		console.log('rightSideToppings', rightSideToppings)
	}, [leftSideToppings, rightSideToppings])

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
		</View>
	)
}
const styles = StyleSheet.create({
	innerContent: {
		width: '90%',
	},
})
export default CreatePizzaContentSecondStep
