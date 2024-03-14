import { StyleSheet, Text, View } from 'react-native'
import PizzasListItemBtn from '../PizzasListItemBtn/PizzasListItemBtn'
import PizzasListItemText from '../PizzasListItemText/PizzasListItemText'
import { IPizza } from '../../../../../types/pizzaTypes'
import { mainOrange } from '../../../../../utils/constants'

interface PizzasListItemTextBoxProps {
	isCreatePizza?: boolean
	data?: IPizza
	big?: boolean
}

const PizzasListItemTextBox: React.FC<PizzasListItemTextBoxProps> = ({
	isCreatePizza = false,
	data,
	big = false,
}) => {
	return (
		<View style={styles.pizzaListItemTextBox}>
			{!isCreatePizza && data ? (
				<PizzasListItemText
					props={{
						title: data.name,
						description: data.description,
						isCreatePizza: isCreatePizza,
						data: data,
						big: big,
					}}
				/>
			) : (
				<PizzasListItemText
					props={{
						title: 'Create Your Own Pizza',
						description:
							'Choose From Our Options Of Designa And Make Your Own Pizza.',
						isCreatePizza: true,
						data: null,
					}}
				/>
			)}
			<Text
				style={{
					position: big ? 'relative' : 'absolute',
					top: big ? 0 : -8,
					fontWeight: 'bold',
					color: mainOrange,
					fontSize: 18,
				}}
			>
				₴{data?.price}
			</Text>
			<PizzasListItemBtn
				data={data ? data : null}
				isCreatePizza={isCreatePizza}
				big={big}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	pizzaListItemTextBox: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		height: '40%',
		position: 'relative',
		paddingTop: 15,
		gap: 7,
	},
})
export default PizzasListItemTextBox
