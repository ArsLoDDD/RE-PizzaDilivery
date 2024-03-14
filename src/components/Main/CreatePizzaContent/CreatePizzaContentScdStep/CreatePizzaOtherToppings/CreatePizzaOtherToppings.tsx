import { useState } from 'react'
import { OtherToppings } from '../../../../../redux/slices/createPizzaSlice'
import CreatePizzaChoseBlock from '../../CreatePizzaContentFrstStep/CreatePizzaChoseBlock/CreatePizzaChoseBlock'
import { IChoseItemPizzaCreate } from '../../CreatePizzaContentFrstStep/CreatePizzaSize/CreatePizzaSize'
import {
	CreatePizzaSauceProps,
	ToppingPrice,
} from '../CreatePizzaSauce/CreatePizzaSauce'
import { ToppingPart } from '../CreatePizzaToppingPart/CreatePizzaToppingPartItem/CreatePizzaToppingPartItem'
import { CreatePizzaChoseItemSizeEnum } from '../../CreatePizzaChoseItem/CreatePizzaChoseItem'
import { IToppingStyle } from '../../CreatePizzaContentFrstStep/CreatePizzaToppingStyle/CreatePizzaToppingStyle'
const toppings: IChoseItemPizzaCreate[] = [
	{
		id: 1,
		name: OtherToppings.PINEAPPLE,
		value: ToppingPrice.EXTRA,
		price: 0,
	},
	{
		id: 2,
		name: OtherToppings.JALAPENO,
		value: ToppingPrice.EXTRA,
		price: 0,
	},
	{
		id: 3,
		name: OtherToppings.SWEET_CORN,
		value: ToppingPrice.EXTRA,
		price: 0,
	},
	{
		id: 4,
		name: OtherToppings.PEPPERONI,
		value: ToppingPrice.EXTRA,
		price: 0,
	},
	{
		id: 5,
		name: OtherToppings.RED_ONION,
		value: ToppingPrice.EXTRA,
		price: 0,
	},
	{
		id: 6,
		name: OtherToppings.ANCHOVIES,
		value: ToppingPrice.EXTRA,
		price: 0,
	},
	{
		id: 7,
		name: OtherToppings.GROUND_BEEF,
		value: ToppingPrice.EXTRA,
		price: 0,
	},
	{
		id: 8,
		name: OtherToppings.CHICKEN_TIKKA,
		value: ToppingPrice.EXTRA,
		price: 0,
	},
	{
		id: 9,
		name: OtherToppings.MUSHROOM,
		value: ToppingPrice.EXTRA,
		price: 0,
	},
	{
		id: 10,
		name: OtherToppings.TUNA,
		value: ToppingPrice.EXTRA,
		price: 0,
	},
]

const CreatePizzaOtherToppings: React.FC<CreatePizzaSauceProps> = ({
	currentPart,
	setSideTippings,
	leftSideToppings,
	rightSideToppings,
}) => {
	const [leftCurrentToping, setLeftCurrentToping] = useState<
		IChoseItemPizzaCreate[]
	>([])
	const [rightCurrentToping, setRightCurrentToping] = useState<
		IChoseItemPizzaCreate[]
	>([])

	const handleChoseItem = (item: IChoseItemPizzaCreate | IToppingStyle) => {
		if ('value' in item) {
			if (currentPart === ToppingPart.LEFT) {
				if (leftCurrentToping.includes(item)) {
					setLeftCurrentToping(
						leftCurrentToping.filter(currentItem => currentItem !== item)
					)
				} else {
					setLeftCurrentToping([...leftCurrentToping, item])
				}
				setSideTippings(currentPart, {
					...leftSideToppings,
					toppings: leftCurrentToping.includes(item)
						? leftCurrentToping.filter(currentItem => currentItem !== item)
						: [...leftCurrentToping, item],
				})
			} else {
				if (rightCurrentToping.includes(item)) {
					setRightCurrentToping(
						rightCurrentToping.filter(currentItem => currentItem !== item)
					)
				} else {
					setRightCurrentToping([...rightCurrentToping, item])
				}
				setSideTippings(currentPart, {
					...rightSideToppings,
					toppings: rightCurrentToping.includes(item)
						? rightCurrentToping.filter(currentItem => currentItem !== item)
						: [...rightCurrentToping, item],
				})
			}
		}
	}
	return (
		<CreatePizzaChoseBlock
			itemTypeChose='Choose Toppings'
			array={toppings}
			currentItem={
				currentPart === ToppingPart.LEFT
					? leftCurrentToping
					: rightCurrentToping
			}
			onClick={handleChoseItem}
			size={CreatePizzaChoseItemSizeEnum.MEDIUM}
			customBoxStyle={{ }}
		/>
	)
}
export default CreatePizzaOtherToppings
