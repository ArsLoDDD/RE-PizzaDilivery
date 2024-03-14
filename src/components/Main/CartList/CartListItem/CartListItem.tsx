import { View, Pressable, StyleSheet, Text, Image } from 'react-native'
import {
	cartItem,
	decrementItem,
	incrementItem,
} from '../../../../redux/slices/cartSlice'
import { useDispatch } from 'react-redux'
import { IPizza } from '../../../../types/pizzaTypes'
interface CartListItemProps {
	item: cartItem
}
const CartListItem: React.FC<CartListItemProps> = ({ item }) => {
	const dispatch = useDispatch()
	return (
		<View style={styles.cartItemBox}>
			{item.data.img && (
				<Image
					source={{
						uri: item.data.img,
					}}
					style={styles.pizzaImg}
				/>
			)}
			<Text
				style={[
					styles.cartItemtext,
					{
						width: 100,
					},
				]}
				numberOfLines={1}
				ellipsizeMode='tail'
			>
				{item.data.name}
			</Text>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					gap: 5,
					width: '15%',
				}}
			>
				<Pressable
					onPress={() => dispatch(decrementItem(item.data.id))}
					style={({ pressed }) => [
						styles.cartItemCountChangeBlock,
						{
							backgroundColor: pressed ? '#00000040' : '#00000020',
						},
					]}
				>
					<Text style={styles.cartItemCountChangeText}>-</Text>
				</Pressable>
				<Text style={styles.cartItemtext}>{item.count}</Text>
				<Pressable
					onPress={() => dispatch(incrementItem(item.data.id))}
					style={({ pressed }) => [
						styles.cartItemCountChangeBlock,
						{
							backgroundColor: pressed ? '#00000040' : '#00000020',
						},
					]}
				>
					<Text style={styles.cartItemCountChangeText}>+</Text>
				</Pressable>
			</View>
			<Text
				numberOfLines={1}
				ellipsizeMode='tail'
				style={[
					styles.cartItemtext,
					{
						width: 65,
						marginLeft: 30,
						borderRadius: 30,
						fontWeight: 'bold',
					},
				]}
			>
				₴{item.data.price * item.count}
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	cartItemBox: {
		width: '90%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
		backgroundColor: 'white',
		borderRadius: 50,
	},
	pizzaImg: {
		width: 75,
		height: 75,
	},
	cartItemtext: {
		fontSize: 20,
		color: 'black',
	},
	cartItemCountChangeBlock: {
		height: 30,
		width: 30,
		backgroundColor: '#00000020',
		borderRadius: 50,
	},
	cartItemCountChangeText: {
		width: '100%',
		fontSize: 22,
		textAlign: 'center',
	},
})
export default CartListItem
