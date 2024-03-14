import { View, ImageBackground, Text, StyleSheet } from 'react-native'
import BackStepIcon from './BackStepIcon/BackStepIcon'
import { useNavigate } from 'react-router'
import StepBox from './StepBox/StepBox'
interface CreatePizzaContentHeaderProps {
	step: number
	setStep: (step: number) => void
}
const CreatePizzaContentHeader: React.FC<CreatePizzaContentHeaderProps> = ({
	step,
	setStep,
}) => {
	return (
		<View
			style={{
				height: 250,
				position: 'relative',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'flex-start',
			}}
		>
			<ImageBackground
				resizeMode='cover'
				style={styles.bgImage}
				source={require('../../../../../assets/bgImage/createPizzaBG.png')}
			/>
			<StepBox setStep={setStep} step={step} />
		</View>
	)
}
const styles = StyleSheet.create({
	bgImage: {
		width: '100%',
		height: '100%',
		position: 'absolute',
	},
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
export default CreatePizzaContentHeader
