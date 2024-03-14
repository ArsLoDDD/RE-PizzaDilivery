import { View, ScrollView, FlatList, StyleSheet } from 'react-native'
import { ITypeOfPizza } from '../../../types/pizzaTypes'
import TypeOfPizzasItem from './TypeOfPizzasItem/TypeOfPizzasItem'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { useDispatch } from 'react-redux'
import {
	PizzaFilterKey,
	setTypeOfPizzaSelected,
} from '../../../redux/slices/menusSlice'

const typesOfPizzas: ITypeOfPizza[] = [
	{
		id: 1,
		name: 'All',
		value: 'All',
	},
	{
		id: 2,
		name: 'New',
		value: 'isNew',
	},
	{
		id: 3,
		name: 'Spicy',
		value: 'isSpicy',
	},
	{
		id: 4,
		name: 'Vegan',
		value: 'isVegan',
	},
	{
		id: 5,
		name: 'Sale',
		value: 'isSale',
	},
]

const TypesOfPizzas: React.FC = () => {
	const typeOfPizzaSelected = useSelector(
		(state: RootState) => state.menus.typeOfPizzaSelected
	)
	const dispatch = useDispatch()
	const selectTypeOfPizza = (name: PizzaFilterKey) => {
		dispatch(setTypeOfPizzaSelected(name))
	}
	return (
		<View
			style={{
				height: 50,
			}}
		>
			<FlatList
				style={styles.list}
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{
					width: '150%',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-evenly',
					alignItems: 'center',
				}}
				horizontal
				data={typesOfPizzas}
				renderItem={({ item }) => (
					<TypeOfPizzasItem
						item={item}
						isSelected={
							typeOfPizzaSelected === `is${item.name}`
								? true
								: item.name === 'All' && typeOfPizzaSelected === 'All'
								? true
								: false
						}
						selectTypeOfPizza={selectTypeOfPizza}
					/>
				)}
				keyExtractor={(item: ITypeOfPizza) => String(item.id)}
			></FlatList>
		</View>
	)
}
const styles = StyleSheet.create({
	list: {
		backgroundColor: 'white',
	},
})
export default TypesOfPizzas
