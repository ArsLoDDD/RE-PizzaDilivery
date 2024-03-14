import { StyleSheet, Text, View } from 'react-native'

const CartListEmpty: React.FC = () => {
	return (
		<View style={styles.container}>
			<View style={styles.textContainer}>
				<Text style={styles.text}>Cart is empty</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f6f3f1',
	},
	textContainer: {
		width: '50%',
		backgroundColor: '#fff',
		paddingVertical: 40,
		borderRadius: 50,
	},
	text: {
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 'bold',
		textTransform: 'capitalize',
		opacity: 0.5,
	},
})
export default CartListEmpty
