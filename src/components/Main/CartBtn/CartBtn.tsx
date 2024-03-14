import {
	Image,
	StyleSheet,
	Text,
	View,
	Animated,
	useWindowDimensions,
} from 'react-native'
import { mainDark, orangeGradient } from '../../../utils/constants'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-native'

const CartBtn: React.FC = () => {
	const cartItemsCount = useSelector(
		(state: RootState) => state.cart.cartItemsCount
	)
	const cartPriceTotal = useSelector(
		(state: RootState) => state.cart.cartPriceTotal
	)
	const fadeAnim = new Animated.Value(0)
	const positionAnim = new Animated.Value(0)
	const { height, width } = useWindowDimensions()
	const path = useLocation().pathname

	useEffect(() => {
		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: 700,
			delay: 200,
			useNativeDriver: true,
		}).start()
		Animated.timing(positionAnim, {
			toValue: 1,
			duration: 500,
			useNativeDriver: true,
		}).start()
	}, [fadeAnim])

	return (
		<Link
			style={{
				zIndex: cartItemsCount === 0 ? -1 : 11,
				position: 'absolute',
				left: height < 500 ? '80%' : path !== '/' ? '65%' : '59%',
				top: height < 500 ? '68%' : path !== '/' ? '12%' : '85%',
				width: height < 500 ? '15%' : '32%',
			}}
			to='/cart'
			underlayColor={'transparent'}
		>
			<Animated.View
				style={[
					styles.cartBtn,
					{
						opacity: fadeAnim,
						transform: [
							{
								translateY: positionAnim.interpolate({
									inputRange: [0, 1],
									outputRange: cartItemsCount === 0 ? [0, 150] : [150, 0],
								}),
							},
						],
					},
				]}
			>
				<Text numberOfLines={1} ellipsizeMode='tail' style={styles.cartBtnText}>
					₴{cartPriceTotal}
				</Text>
				<View>
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
					<Image
						style={styles.cartBtnImg}
						source={require('../../../../assets/icons/pizza.png')}
					/>
				</View>
			</Animated.View>
		</Link>
	)
}

const styles = StyleSheet.create({
	cartBtn: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		gap: 10,
		padding: 5,
		borderRadius: 50,
		backgroundColor: mainDark,
	},
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
export default CartBtn
