import { LayoutChangeEvent, Pressable, StyleSheet, Text } from 'react-native'
import { mainYellow } from '../../../../../utils/constants'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { IPizza } from '../../../../../types/pizzaTypes'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../../../redux/slices/cartSlice'

interface IPizzasListItemBtn {
	data: IPizza | null
	isCreatePizza?: boolean
	big?: boolean
}

const PizzasListItemBtn: React.FC<IPizzasListItemBtn> = ({
	data,
	isCreatePizza = false,
	big = false,
}) => {
	const [blockHeight, setBlockHeight] = useState(0)
	const [isPressed, setIsPressed] = useState(false)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const onLayout = (event: LayoutChangeEvent) => {
		const { height } = event.nativeEvent.layout
		setBlockHeight(height)
	}
	const handlePressIn = () => {
		setIsPressed(true)
	}

	const handlePressOut = () => {
		setIsPressed(false)
	}
	return (
		<Pressable
			onPress={
				isCreatePizza
					? () => navigate('/create')
					: data
					? e => {
							e.preventDefault()
							e.stopPropagation()
							dispatch(addToCart(data))
					  }
					: () => console.log('no data')
			}
			onPressIn={handlePressIn}
			onPressOut={handlePressOut}
			onLayout={onLayout}
			style={({ pressed }) => [
				styles.button,
				{
					transform: [{ translateY: blockHeight / 2 }],
					backgroundColor: isCreatePizza
						? isPressed
							? mainYellow
							: 'white'
						: isPressed
						? 'white'
						: mainYellow,
					position: big ? 'relative' : 'absolute',
				},
			]}
		>
			<Text
				style={{
					color: isCreatePizza
						? isPressed
							? 'white'
							: 'black'
						: isPressed
						? 'black'
						: 'white',
					fontSize: 16,
					fontWeight: 'bold',
				}}
			>
				{isCreatePizza ? 'Create Now' : 'Add To Cart'}
			</Text>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	button: {
		bottom: 0,
		paddingVertical: 10,
		paddingHorizontal: 30,
		borderRadius: 30,
	},
})
export default PizzasListItemBtn
