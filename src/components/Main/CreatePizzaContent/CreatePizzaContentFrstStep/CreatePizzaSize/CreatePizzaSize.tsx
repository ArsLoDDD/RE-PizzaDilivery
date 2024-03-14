import { useState } from 'react'
import CreatePizzaChoseBlock from '../CreatePizzaChoseBlock/CreatePizzaChoseBlock'
import { CreatePizzaChoseItemSizeEnum } from '../../CreatePizzaChoseItem/CreatePizzaChoseItem'
import { IToppingStyle } from '../CreatePizzaToppingStyle/CreatePizzaToppingStyle'
import { useDispatch } from 'react-redux'
import {
	OtherToppings,
	SauceValue,
	SizeValue,
	setSize,
	setSizeName,
} from '../../../../../redux/slices/createPizzaSlice'
import { ToppingPrice } from '../../CreatePizzaContentScdStep/CreatePizzaSauce/CreatePizzaSauce'

export interface IChoseItemPizzaCreate {
	id: number
	name: string | SauceValue | OtherToppings
	value: SizeValue | ToppingPrice
	price: number
}
const sizes: IChoseItemPizzaCreate[] = [
	{
		id: 1,
		name: '7 inch',
		value: SizeValue.EXTRA_SMALL,
		price: 55,
	},
	{
		id: 2,
		name: '9.5 inch',
		value: SizeValue.SMALL,
		price: 75,
	},
	{
		id: 3,
		name: '11.5 inch',
		value: SizeValue.MEDIUM,
		price: 99,
	},
	{
		id: 4,
		name: '13.5 inch',
		value: SizeValue.LARGE,
		price: 115,
	},
]

const CreatePizzaSize: React.FC = ({}) => {
	const [currentSize, setCurrentSize] = useState<
		IChoseItemPizzaCreate | IToppingStyle
	>(sizes[0])
	const dispatch = useDispatch()
	const handleChoseItem = (item: IChoseItemPizzaCreate | IToppingStyle) => {
		if ('value' in item) {
			setCurrentSize(item)
			dispatch(setSize(item.price))
			dispatch(setSizeName(item.name))
		}
	}
	return (
		<CreatePizzaChoseBlock
			itemTypeChose='Size'
			array={sizes}
			currentItem={currentSize}
			onClick={handleChoseItem}
			size={CreatePizzaChoseItemSizeEnum.SMALL}
		/>
	)
}

export default CreatePizzaSize
