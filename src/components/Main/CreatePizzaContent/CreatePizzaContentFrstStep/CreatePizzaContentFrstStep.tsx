import { Text, View, StyleSheet, Button, Pressable } from 'react-native'
import CreatePizzaSize from './CreatePizzaSize/CreatePizzaSize'
import CreatePizzaCrust from './CreatePizzaCrust/CreatePizzaCrust'
import CreatePizzaToppingStyle from './CreatePizzaToppingStyle/CreatePizzaToppingStyle'
import { orangeGradient } from '../../../../utils/constants'
import { useDispatch } from 'react-redux'
import { postOrder } from '../../../../redux/slices/createPizzaSlice'

interface CreatePizzaContentFrstStepProps {
	setStep: (step: number) => void
}
const CreatePizzaContentFrstStep: React.FC<CreatePizzaContentFrstStepProps> = ({
	setStep,
}) => {
	const dispatch = useDispatch()
	return (
		<View style={styles.innerContent}>
			<Text style={[styles.titletext, styles.marginBottom]}>
				Create Your Own Pizza
			</Text>
			<Text
				style={[styles.descriptionText, styles.marginBottom, styles.lineHeight]}
			>
				Create your own pizza by choosing a crust, sauce and toppings! Select
				from three crust sizes & thincknesses, choice of sauce over 10
				individual toppings
			</Text>
			<Text style={[styles.secondDescriptionText, styles.lineHeight]}>
				You can choose upto 4 FREE toppins and 4 Extra toppings for ₴15 each
			</Text>
			<CreatePizzaSize />
			<CreatePizzaCrust />
			<CreatePizzaToppingStyle />
			<Pressable
				onPress={() => {
					dispatch(postOrder())
					setStep(2)
				}}
				style={({ pressed }) => [
					{
						width: '100%',
						backgroundColor: pressed ? '#FD5C2E40' : orangeGradient,
						paddingVertical: 15,
						borderRadius: 40,
					},
				]}
			>
				<Text
					style={{
						color: 'white',
						textAlign: 'center',
						fontWeight: 'bold',
						fontSize: 24,
					}}
				>
					Next
				</Text>
			</Pressable>
		</View>
	)
}
const styles = StyleSheet.create({
	innerContent: {
		width: '90%',
	},
	titletext: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	descriptionText: {
		width: '95%',
		fontSize: 13,
		opacity: 0.5,
	},
	secondDescriptionText: {
		fontSize: 14,
		fontWeight: 'bold',
		marginBottom: 15,
	},
	marginBottom: {
		marginBottom: 7,
	},
	lineHeight: {
		lineHeight: 20,
	},
})
export default CreatePizzaContentFrstStep
