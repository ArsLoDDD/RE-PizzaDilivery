import { View, Text, ImageBackground } from 'react-native'
import CreatePizzaChoseItem, {
	CreatePizzaChoseItemSizeEnum,
} from '../../CreatePizzaChoseItem/CreatePizzaChoseItem'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
	ToppingStyle,
	setToppingStyle,
} from '../../../../../redux/slices/createPizzaSlice'
export interface IToppingStyle {
	id: number
	// toppingImg: string
	name: string
}
const toppingStyles: IToppingStyle[] = [
	{
		id: 1,
		// toppingImg: require('../../../../../../assets/icons/frstToppingStyle.png'),
		name: ToppingStyle.FIRST,
	},
	{
		id: 2,
		// toppingImg: '../../../../../../assets/icons/scdToppingStyle.png',
		name: ToppingStyle.SECOND,
	},
]

const CreatePizzaToppingStyle: React.FC = () => {
	const [currentToppingStyle, setCurrentToppingStyle] = useState<IToppingStyle>(
		toppingStyles[0]
	)
	const dispatch = useDispatch()
	const handleChoseItem = (item: IToppingStyle) => {
		setCurrentToppingStyle(item)
		dispatch(
			setToppingStyle(item.id === 1 ? ToppingStyle.FIRST : ToppingStyle.SECOND)
		)
	}
	return (
		<View
			style={{
				marginBottom: 35,
			}}
		>
			<Text
				style={{
					marginBottom: 10,
					fontSize: 18,
					fontWeight: 'bold',
					opacity: 0.6,
				}}
			>
				Topping Style
			</Text>
			<View
				style={{
					width: '100%',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				{toppingStyles.map(item => (
					<CreatePizzaChoseItem
						key={item.id}
						item={item}
						size={CreatePizzaChoseItemSizeEnum.LARGE}
						radius={170}
						isToppingStyle={true}
						height={180}
						currentItem={currentToppingStyle}
						onClick={handleChoseItem}
					>
						<ImageBackground
							resizeMode='cover'
							source={
								item.id === 1
									? require('../../../../../../assets/icons/frstToppingStyle.png')
									: require('../../../../../../assets/icons/scdToppingStyle.png')
							}
							style={{
								width: 170,
								height: 170,
							}}
						/>
					</CreatePizzaChoseItem>
				))}
			</View>
		</View>
	)
}
export default CreatePizzaToppingStyle
