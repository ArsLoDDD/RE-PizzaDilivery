import { View, StyleSheet, useWindowDimensions, Pressable } from 'react-native'
import { orangeGradient } from '../../../../utils/constants'
import { IPizza } from '../../../../types/pizzaTypes'
import PizzasListItemImg from './PizzasListItemImg/PizzasListItemImg'
import PizzasListItemTextBox from './PizzasListItemTextBox/PizzasListItemTextBox'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

interface IPizzaListItem {
	isCreatePizza?: boolean
	data?: IPizza
	big?: boolean
}

const PizzasListItem: React.FC<IPizzaListItem> = ({
	isCreatePizza = false,
	data,
	big = false,
}) => {
	const { width } = useWindowDimensions()
	const navigate = useNavigate()

	return (
		<Pressable
			onPress={() =>
				!isCreatePizza &&
				!big &&
				navigate(`/pizza/${data?.id}`, { state: { data } })
			}
			style={({ pressed }) => [
				styles.PizzaListItemBox,
				{
					width: width < 500 ? (big ? '20%' : '45%') : '23%',
					height: width < 500 ? 250 : 270,
					backgroundColor: isCreatePizza
						? orangeGradient
						: !pressed
						? 'white'
						: big
						? 'white'
						: '#00000005',
				},
			]}
		>
			<PizzasListItemImg
				isCreatePizza={isCreatePizza}
				img={data ? data.img : null}
			/>
			<PizzasListItemTextBox isCreatePizza={isCreatePizza} data={data} />
		</Pressable>
	)
}
const styles = StyleSheet.create({
	PizzaListItemBox: {
		borderRadius: 8,
	},
})
export default PizzasListItem
