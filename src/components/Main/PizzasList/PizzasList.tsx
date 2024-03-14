import { FlatList, useWindowDimensions } from 'react-native'
import PizzasListItem from './PizzasListItem/PizzasListItem'
import { data } from '../../../apis/DB/pizzasData'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
	setCurrentPizzasArray,
	setInitialPizzasArray,
} from '../../../redux/slices/menusSlice'
import { RootState } from '../../../redux/store'
import { useSelector } from 'react-redux'

const PizzasList: React.FC = () => {
	const [pizzaArray, setPizzaArray] = useState<any>()
	const initialPizzasArray = useSelector(
		(state: RootState) => state.menus.initialPizzasArray
	)
	const currentPizzasArray = useSelector(
		(state: RootState) => state.menus.currentPizzasArray
	)
	const [numColumns, setNumColumns] = useState<number>(2)
	const { width } = useWindowDimensions()
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(setInitialPizzasArray(data))
		dispatch(setCurrentPizzasArray(data))
	}, [])
	useEffect(() => {
		setPizzaArray([{ id: 0 }, ...currentPizzasArray])
	}, [currentPizzasArray])
	useEffect(() => {
		if (width < 500) {
			setNumColumns(2)
		} else {
			setNumColumns(3)
		}
	}, [width])

	return (
		<>
			<FlatList
				data={pizzaArray}
				renderItem={({ item }) => {
					return item.id > 0 ? (
						<PizzasListItem data={item} />
					) : (
						<PizzasListItem isCreatePizza={true} />
					)
				}}
				key={numColumns}
				showsVerticalScrollIndicator={false}
				numColumns={numColumns}
				contentContainerStyle={{
					paddingBottom: 40,
				}}
				columnWrapperStyle={{
					justifyContent: 'space-evenly',
					paddingVertical: 25,
				}}
			/>
		</>
	)
}
export default PizzasList
