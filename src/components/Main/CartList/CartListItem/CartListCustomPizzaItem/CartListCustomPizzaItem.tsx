import { Text, View } from 'react-native'
import { ICreatePizzaOrder } from '../../../../../redux/slices/createPizzaSlice'
interface CartListCustomPizzaItemProps {
	data: ICreatePizzaOrder
}
const CartListCustomPizzaItem: React.FC<CartListCustomPizzaItemProps> = ({
	data,
}) => {
	console.log('data', JSON.stringify(data, null, 2))
	return (
		<View>
			<Text>Your Custom Pizza</Text>
			<Text>Crust: {data.createdPizza.crust.crustValue}</Text>
			<Text>Size: {data.createdPizza.size.sizeName}</Text>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					gap: 20,
				}}
			>
				<View>
					<Text>Left Side</Text>
					<Text> Sauce: {data.createdPizza.leftSideToppings?.sauce}</Text>
					{data.createdPizza.leftSideToppings?.toppings.map((item, index) => (
						<Text key={item.id}>{item.name}</Text>
					))}
				</View>
				<View>
					<Text>Right Side</Text>
					<Text> Sauce: {data.createdPizza.rightSideToppings?.sauce}</Text>
					{data.createdPizza.rightSideToppings?.toppings.map((item, index) => (
						<Text key={item.id}>{item.name}</Text>
					))}
				</View>
			</View>
			<Text>
				Price:
				{data.createdPizza.mainIngredientsPrice +
					data.createdPizza.otherToppingPriceLeft +
					data.createdPizza.otherToppingPriceRight}
			</Text>
		</View>
	)
}
export default CartListCustomPizzaItem
