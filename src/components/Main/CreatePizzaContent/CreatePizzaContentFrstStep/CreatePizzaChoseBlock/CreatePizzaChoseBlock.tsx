import { View, Text, StyleSheet } from 'react-native'
import CreatePizzaChoseItem, {
	CreatePizzaChoseItemSizeEnum,
} from '../../CreatePizzaChoseItem/CreatePizzaChoseItem'
import { IChoseItemPizzaCreate } from '../CreatePizzaSize/CreatePizzaSize'
import { orangeGradient } from '../../../../../utils/constants'
import { IToppingStyle } from '../CreatePizzaToppingStyle/CreatePizzaToppingStyle'
import { SauceValue } from '../../../../../redux/slices/createPizzaSlice'

export type CreatePizzaChoseBlockTypes = IChoseItemPizzaCreate

interface CreatePizzaChoseBlockProps {
	currentItem: any
	onClick: (item: CreatePizzaChoseBlockTypes | IToppingStyle) => void
	array: CreatePizzaChoseBlockTypes[]
	size: CreatePizzaChoseItemSizeEnum
	itemTypeChose: string
	customBoxStyle?: any
}
const CreatePizzaChoseBlock: React.FC<CreatePizzaChoseBlockProps> = ({
	currentItem,
	onClick,
	array,
	size,
	itemTypeChose,
	customBoxStyle,
}) => {
	return (
		<View
			style={[
				{
					marginBottom: 15,
				},
			]}
		>
			<Text
				style={{
					marginBottom: 10,
					fontSize: 18,
					fontWeight: 'bold',
					opacity: 0.6,
				}}
			>
				{itemTypeChose}
			</Text>
			<View style={[styles.containerSize, customBoxStyle]}>
				{array.map(item => {
					const isCurrent = Array.isArray(currentItem)
						? currentItem.some(ci => ci.id === item.id)
						: currentItem?.id === item.id
					return (
						<CreatePizzaChoseItem
							item={item}
							size={size}
							key={item.id}
							onClick={onClick}
							currentItem={isCurrent ? currentItem : undefined}
						>
							<Text
								style={{
									color: isCurrent ? orangeGradient : 'gray',
									fontWeight: isCurrent ? 'bold' : 'normal',
								}}
							>
								{item.name}
							</Text>
							{item.price > 0 && (
								<Text
									style={{
										color: isCurrent ? orangeGradient : 'black',
										fontWeight: 'bold',
									}}
								>
									₴{item.price}
								</Text>
							)}
						</CreatePizzaChoseItem>
					)
				})}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	containerSize: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		rowGap: 30,
		justifyContent: 'space-between',
	},
})
export default CreatePizzaChoseBlock
