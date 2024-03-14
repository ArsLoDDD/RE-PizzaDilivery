import { useState } from 'react'
import CreatePizzaChoseBlock from '../CreatePizzaChoseBlock/CreatePizzaChoseBlock'
import { IChoseItemPizzaCreate } from '../CreatePizzaSize/CreatePizzaSize'
import { CreatePizzaChoseItemSizeEnum } from '../../CreatePizzaChoseItem/CreatePizzaChoseItem'
import { IToppingStyle } from '../CreatePizzaToppingStyle/CreatePizzaToppingStyle'
import { useDispatch } from 'react-redux'
import {
	CrustValue,
	SizeValue,
	setCrust,
} from '../../../../../redux/slices/createPizzaSlice'

const crusts: IChoseItemPizzaCreate[] = [
	{
		id: 1,
		name: 'Classic Crust',
		value: SizeValue.NULL,
		price: 0,
	},
	{
		id: 2,
		name: 'Italian Crust',
		value: SizeValue.NULL,
		price: 20,
	},
]

const CreatePizzaCrust: React.FC = ({}) => {
	const [currentCrust, setCurrentCrust] = useState<
		IChoseItemPizzaCreate | IToppingStyle
	>(crusts[0])
	const dispatch = useDispatch()
	const handleChoseItem = (item: IChoseItemPizzaCreate | IToppingStyle) => {
		setCurrentCrust(item)
		dispatch(setCrust(item.id === 1 ? CrustValue.CLASSIC : CrustValue.ITALIAN))
	}
	return (
		<CreatePizzaChoseBlock
			itemTypeChose='Crust'
			array={crusts}
			onClick={handleChoseItem}
			currentItem={currentCrust}
			size={CreatePizzaChoseItemSizeEnum.LARGE}
		/>
	)
}
export default CreatePizzaCrust
