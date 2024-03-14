import { ReactNode } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { IChoseItemPizzaCreate } from '../CreatePizzaContentFrstStep/CreatePizzaSize/CreatePizzaSize'
import { orangeGradient } from '../../../../utils/constants'
import { IToppingStyle } from '../CreatePizzaContentFrstStep/CreatePizzaToppingStyle/CreatePizzaToppingStyle'
export interface CreatePizzaChoseItem {
	id: string
	name: string
	price?: number
}

export enum CreatePizzaChoseItemSizeEnum {
	SMALL = '23%',
	MEDIUM = '30%',
	LARGE = '45%',
}

interface CreatePizzaChoseItemProps {
	item: IChoseItemPizzaCreate | IToppingStyle
	onClick: (item: IChoseItemPizzaCreate | IToppingStyle) => void
	children?: ReactNode
	size: CreatePizzaChoseItemSizeEnum
	currentItem?: IChoseItemPizzaCreate | IToppingStyle
	radius?: number
	isToppingStyle?: boolean
	height?: number
}
const CreatePizzaChoseItem: React.FC<CreatePizzaChoseItemProps> = ({
	item,
	onClick,
	size,
	children,
	currentItem,
	radius = 20,
	isToppingStyle = false,
	height,
}) => {
	return (
		<Pressable
			onPress={() => onClick(item)}
			style={({ pressed }) => [
				styles.container,
				{
					width: size,
					height: height && height,
					borderWidth: currentItem?.id === item.id ? 2 : 0,
					borderColor: orangeGradient,
					borderRadius: radius,
					paddingVertical: isToppingStyle ? 20 : 15,
					backgroundColor: pressed ? '#00000010' : 'white',
				},
			]}
		>
			{children}
		</Pressable>
	)
}
const styles = StyleSheet.create({
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 5,
		backgroundColor: 'white',
	},
})
export default CreatePizzaChoseItem
