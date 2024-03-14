import { View, Text, StyleSheet } from 'react-native'
import BackStepIcon from '../BackStepIcon/BackStepIcon'
import { useNavigate } from 'react-router'

interface StepBoxProps {
	step: number
	setStep: (step: number) => void
}
const StepBox: React.FC<StepBoxProps> = ({ step, setStep }) => {
	const navigate = useNavigate()

	return (
		<View style={styles.stepContainer}>
			<BackStepIcon
				onClick={() => {
					if (step === 1) {
						navigate('/')
						return
					}
					setStep(step - 1)
				}}
			/>
			<Text style={styles.stepContainerText}>
				Step {step}{' '}
				<Text
					style={{
						opacity: 0.4,
					}}
				>
					/ 2
				</Text>
			</Text>
		</View>
	)
}
const styles = StyleSheet.create({
	stepContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
		marginLeft: 40,
	},
	stepContainerText: {
		fontSize: 18,
		fontWeight: 'bold',
	},
})
export default StepBox
