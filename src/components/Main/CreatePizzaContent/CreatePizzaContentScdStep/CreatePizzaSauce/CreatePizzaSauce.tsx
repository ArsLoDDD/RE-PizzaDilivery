import { useState } from 'react'
import CreatePizzaChoseBlock from '../../CreatePizzaContentFrstStep/CreatePizzaChoseBlock/CreatePizzaChoseBlock'
import { IChoseItemPizzaCreate } from '../../CreatePizzaContentFrstStep/CreatePizzaSize/CreatePizzaSize'

import {
	SauceValue,
	ToppingSide,
} from '../../../../../redux/slices/createPizzaSlice'
import { CreatePizzaChoseItemSizeEnum } from '../../CreatePizzaChoseItem/CreatePizzaChoseItem'
import { IToppingStyle } from '../../CreatePizzaContentFrstStep/CreatePizzaToppingStyle/CreatePizzaToppingStyle'
import { ToppingPart } from '../CreatePizzaToppingPart/CreatePizzaToppingPartItem/CreatePizzaToppingPartItem'
export enum ToppingPrice {
	FREE = 0,
	EXTRA = 15,
}
const sauces: IChoseItemPizzaCreate[] = [
	{
		id: 1,
		name: SauceValue.BBQ,
		value: ToppingPrice.EXTRA,
		price: 0,
	},
	{
		id: 2,
		name: SauceValue.TOMATO,
		value: ToppingPrice.EXTRA,
		price: 0,
	},
	{
		id: 3,
		name: SauceValue.GARLIC_HERB,
		value: ToppingPrice.EXTRA,
		price: 0,
	},
]
export interface CreatePizzaSauceProps {
	currentPart: ToppingPart
	setSideTippings: (side: ToppingPart, toppings: ToppingSide) => void
	leftSideToppings: ToppingSide
	rightSideToppings: ToppingSide
}
const CreatePizzaSauce: React.FC<CreatePizzaSauceProps> = ({
	currentPart,
	setSideTippings,
	leftSideToppings,
	rightSideToppings,
}) => {
	const [leftCurrentSauce, setLeftCurrentSauce] = useState<SauceValue>(
		SauceValue.TOMATO
	)
	const [rightCurrentSauce, setRightCurrentSauce] = useState<SauceValue>(
		SauceValue.TOMATO
	)

	const handleChoseItem = (item: IChoseItemPizzaCreate | IToppingStyle) => {
		if ('value' in item) {
			if (currentPart === ToppingPart.LEFT) {
				setLeftCurrentSauce(item.name as SauceValue)
			} else {
				setRightCurrentSauce(item.name as SauceValue)
			}
			setSideTippings(currentPart, {
				...(currentPart === ToppingPart.LEFT
					? leftSideToppings
					: rightSideToppings),
				sauce: item.name as SauceValue,
			})
		}
	}
	return (
		<CreatePizzaChoseBlock
			itemTypeChose='Sauce'
			array={sauces}
			currentItem={sauces.find(item => {
				if (currentPart === ToppingPart.LEFT) {
					return item.name === leftCurrentSauce
				} else {
					return item.name === rightCurrentSauce
				}
			})}
			onClick={handleChoseItem}
			size={CreatePizzaChoseItemSizeEnum.MEDIUM}
		/>
	)
}
export default CreatePizzaSauce
