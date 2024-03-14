import { Text, StyleSheet, View } from 'react-native'
import SpicyPizzaIcon from '../PizzasListItemTextBox/TypePizzaIcons/SpicyPizzaIcon'
import { IPizza } from '../../../../../types/pizzaTypes'
import VeganPizzaIcon from '../PizzasListItemTextBox/TypePizzaIcons/VeganPizzaIcon'

interface PizzasListItemTextProps {
	props: {
		title: string
		description: string
		isCreatePizza?: boolean
		data: IPizza | null
		big?: boolean
	}
}

const PizzasListItemText: React.FC<PizzasListItemTextProps> = ({ props }) => {
	return (
		<>
			<Text
				style={[
					styles.pizzaTextTitle,
					{
						color: props.isCreatePizza ? 'white' : 'black',
						fontSize: props.big ? 24 : 16,
					},
				]}
			>
				{props.title}
			</Text>
			<Text
				numberOfLines={props.big ? 5 : 2}
				ellipsizeMode='tail'
				style={[
					styles.pizzaTextDescription,
					{
						color: props.isCreatePizza ? 'white' : '#00000080',
						width: props.big ? '60%' : '90%',
						fontSize: props.big ? 16 : 10,
					},
				]}
			>
				{props.description}
			</Text>
			{props.data?.isSpicy && (
				<View
					style={[
						styles.iconPosition,
						{
							right: 20,
							backgroundColor: '#FF000050',
						},
					]}
				>
					<SpicyPizzaIcon />
				</View>
			)}
			{props.data?.isVegan && (
				<View
					style={[
						styles.iconPosition,
						{
							left: 20,
							backgroundColor: '#00FF0050',
						},
					]}
				>
					<VeganPizzaIcon />
				</View>
			)}
		</>
	)
}

const styles = StyleSheet.create({
	pizzaTextTitle: {
		fontWeight: 'bold',
		position: 'relative',
	},
	pizzaTextDescription: {
		textAlign: 'center',
	},
	textWhite: {
		color: 'white',
	},
	textBlack: {
		color: 'black',
	},
	iconPosition: {
		position: 'absolute',
		top: -15,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: 22,
		width: 22,
		borderRadius: 5,
	},
})
export default PizzasListItemText
