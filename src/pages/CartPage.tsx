import {
	SafeAreaView,
	Text,
	ScrollView,
	View,
	Image,
	StyleSheet,
	Pressable,
} from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import CartListEmpty from '../components/Main/CartList/CartListEmpty/CartListEmpty'
import CartListItem from '../components/Main/CartList/CartListItem/CartListItem'
import { useDispatch } from 'react-redux'
import { sendOrder } from '../redux/slices/cartSlice'
import CartListCustomPizzaItem from '../components/Main/CartList/CartListItem/CartListCustomPizzaItem/CartListCustomPizzaItem'

const CartPage: React.FC = (): JSX.Element => {
	const cartItems = useSelector((state: RootState) => state.cart.cartItems)
	const customPizzas = useSelector(
		(state: RootState) => state.cart.customPizzas
	)
	const dispatch = useDispatch()
	if (cartItems.length === 0 && customPizzas.length === 0)
		return <CartListEmpty />

	return (
		<ScrollView
			style={styles.container}
			contentContainerStyle={{
				alignItems: 'center',
				gap: 20,
				paddingTop: 20,
				paddingBottom: 50,
			}}
		>
			{cartItems.map((item, index) => (
				<CartListItem key={index} item={item} />
			))}
			{customPizzas.map((item, index) => (
				<CartListCustomPizzaItem key={index} data={item} />
			))}
			<Pressable
				onPress={() => dispatch(sendOrder())}
				style={({ pressed }) => [
					{
						paddingHorizontal: 20,
						paddingVertical: 10,
						backgroundColor: pressed ? '#00000010' : 'white',
						borderRadius: 50,
					},
				]}
			>
				<Text
					style={{
						fontSize: 14,
						fontWeight: 'bold',
					}}
				>
					Send Order
				</Text>
			</Pressable>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f6f3f1',
	},
})

export default CartPage
