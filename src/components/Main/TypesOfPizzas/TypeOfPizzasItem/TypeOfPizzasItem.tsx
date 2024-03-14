import { Pressable, StyleSheet, Text } from 'react-native'
import { ITypeOfPizza } from '../../../../types/pizzaTypes'
import { mainYellow } from '../../../../utils/constants'
import { useState } from 'react'
import { PizzaFilterKey } from '../../../../redux/slices/menusSlice'

interface ITypeOfPizzasItem {
	item: ITypeOfPizza
	isSelected?: boolean
	selectTypeOfPizza?: (name: PizzaFilterKey) => void
}

const TypeOfPizzasItem: React.FC<ITypeOfPizzasItem> = ({
	item,
	isSelected,
	selectTypeOfPizza,
}) => {
	const [isPressed, setIsPressed] = useState(false)

	const handlePressIn = () => {
		setIsPressed(true)
	}

	const handlePressOut = () => {
		setIsPressed(false)
	}

	return (
		<Pressable
			onPress={() =>
				selectTypeOfPizza && selectTypeOfPizza(item.value as PizzaFilterKey)
			}
			onPressIn={handlePressIn}
			onPressOut={handlePressOut}
			style={[
				styles.listItem,
				{
					backgroundColor: isSelected || isPressed ? mainYellow : 'white',
				},
			]}
		>
			<Text
				style={[
					styles.listItemText,
					{
						color: isSelected || isPressed ? 'white' : 'black',
					},
				]}
			>
				{item.name}
			</Text>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	listItem: {
		paddingHorizontal: 30,
		paddingVertical: 7,
		borderRadius: 30,
	},
	listItemText: {
		fontSize: 12,
		fontWeight: 'bold',
	},
})

export default TypeOfPizzasItem
