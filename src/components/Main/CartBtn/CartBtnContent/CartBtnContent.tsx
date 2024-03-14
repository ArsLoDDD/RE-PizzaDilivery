import { View, Text, Image, StyleSheet } from 'react-native'
import { orangeGradient } from '../../../../utils/constants'

interface CartBtnContentProps {
	cartItemsCount: number | null
	cartPriceTotal: number
	isBig?: boolean
}
const CartBtnContent: React.FC<CartBtnContentProps> = ({
	cartItemsCount,
	cartPriceTotal,
	isBig = false,
}) => {
	return (
		<>
			<Text
				numberOfLines={1}
				ellipsizeMode='tail'
				style={[
					styles.cartBtnText,
					{
						fontSize: isBig ? 20 : 16,
					},
				]}
			>
				₴{cartPriceTotal}
			</Text>
			<View>
				{cartItemsCount !== null && (
					<View style={styles.cartCountItems}>
						<Text
							style={{
								color: 'white',
								fontWeight: 'bold',
							}}
						>
							{cartItemsCount}
						</Text>
					</View>
				)}
				<Image
					style={styles.cartBtnImg}
					source={require('../../../../../assets/icons/pizza.png')}
				/>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	cartBtnImg: {
		height: 45,
		width: 45,
	},
	cartBtnText: {
		width: '50%',
		textAlign: 'center',
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
		overflow: 'hidden',
		marginLeft: 10,
	},
	cartCountItems: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		width: 25,
		height: 25,
		borderRadius: 50,
		borderWidth: 2,
		borderColor: 'white',
		backgroundColor: orangeGradient,
		top: -9,
		right: -6,
		zIndex: 11,
	},
})
export default CartBtnContent
