import { StyleSheet, Text, View } from 'react-native'
import { ICreatePizzaOrder } from '../../../../../redux/slices/createPizzaSlice'
interface CartListCustomPizzaItemProps {
	data: ICreatePizzaOrder
	index: number
}
const CartListCustomPizzaItem: React.FC<CartListCustomPizzaItemProps> = ({
	data,
	index,
}) => {
	return (
		<View style={styles.container}>
			<View style={styles.titleBox}>
				<Text style={styles.titleText}>Your Custom Pizza #{index + 1}</Text>
			</View>
			<View style={styles.mainInfoBlock}>
				<Text style={styles.mainInfoBlockText}>
					{data.createdPizza.crust.crustValue} Crust
				</Text>
				{/* <View style={styles.verticalLine}></View> */}
				<Text style={styles.mainInfoBlockText}>
					{data.createdPizza.size.sizeName} Size
				</Text>
			</View>

			<View style={[styles.toppingInfoBox]}>
				<View
					style={{
						alignSelf: 'flex-start',
						gap: 10,
						width: '40%',
					}}
				>
					<View style={styles.toppingTitleTextBox}>
						<Text style={styles.toppingTitleText}>Left Side</Text>
					</View>
					<View style={styles.toppingsBox}>
						{data.createdPizza.leftSideToppings?.toppings.map((item, index) => (
							<Text
								key={item.id}
								style={{
									textAlign: 'left',
									opacity: 0.8,
								}}
							>
								{index + 1}. {item.name}
							</Text>
						))}
					</View>
					<View style={styles.saucesBox}>
						<Text style={styles.saucesText} numberOfLines={1}>
							{' '}
							Sauce: {data.createdPizza.leftSideToppings?.sauce}
						</Text>
					</View>
				</View>
				<View
					style={[
						styles.verticalLine,
						{
							height: '100%',
						},
					]}
				></View>
				<View
					style={{
						alignSelf: 'flex-start',
						gap: 10,
						width: '40%',
					}}
				>
					<View style={styles.toppingTitleTextBox}>
						<Text style={styles.toppingTitleText}>Right Side</Text>
					</View>
					<View style={styles.toppingsBox}>
						{data.createdPizza.rightSideToppings?.toppings.map(
							(item, index) => (
								<Text
									key={item.id}
									style={{
										textAlign: 'left',
										opacity: 0.8,
									}}
								>
									{index + 1}. {item.name}
								</Text>
							)
						)}
					</View>
					<View style={styles.saucesBox}>
						<Text
							style={styles.saucesText}
							ellipsizeMode='tail'
							numberOfLines={1}
						>
							{' '}
							Sauce: {data.createdPizza.rightSideToppings?.sauce}
						</Text>
					</View>
				</View>
			</View>
			<View style={styles.priceBox}>
				<Text style={styles.priceBoxText}>
					Price: ₴
					{data.createdPizza.crust.crustPrice +
						data.createdPizza.size.sizePrice +
						data.createdPizza.otherToppingPriceLeft +
						data.createdPizza.otherToppingPriceRight}
				</Text>
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		width: '90%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
		paddingVertical: 20,
		borderRadius: 50,
	},
	titleBox: {
		width: '80%',
		backgroundColor: '#FD5C2E',
		padding: 10,
		borderRadius: 20,
	},
	titleText: {
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	mainInfoBlock: {
		width: '60%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#F6F3F1',
		paddingHorizontal: 10,
		paddingVertical: 15,
		borderBottomStartRadius: 20,
		borderBottomEndRadius: 20,
	},
	mainInfoBlockText: {
		fontSize: 16,
		fontWeight: 'bold',
		opacity: 0.5,
	},
	verticalLine: {
		height: '150%',
		width: 2,
		backgroundColor: 'black',
		opacity: 0.2,
	},
	toppingInfoBox: {
		width: '80%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		padding: 10,
		borderRadius: 20,
		backgroundColor: '#F6F3F1',
	},
	toppingTitleTextBox: {
		backgroundColor: 'white',
		borderRadius: 20,
		paddingVertical: 5,
	},

	toppingTitleText: {
		textAlign: 'center',
		fontSize: 14,
		fontWeight: 'bold',
	},
	toppingsBox: {
		width: '100%',
		backgroundColor: 'white',
		paddingHorizontal: 10,
		paddingVertical: 10,
		borderRadius: 20,
		gap: 2,
	},

	priceBox: {
		backgroundColor: '#FD5C2E',
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderBottomStartRadius: 20,
		borderBottomEndRadius: 20,
	},
	priceBoxText: {
		color: 'white',
		fontWeight: 'bold',
	},
	saucesBox: {
		width: '100%',
		backgroundColor: 'white',
		borderRadius: 20,
		paddingVertical: 10,
	},
	saucesText: {
		width: '90%',
		textAlign: 'center',
		overflow: 'hidden',
	},
})
export default CartListCustomPizzaItem
