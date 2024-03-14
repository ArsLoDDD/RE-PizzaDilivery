import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import CreatePizzaContentHeader from '../components/Main/CreatePizzaContent/CreatePizzaContentHeader/CreatePizzaContentHeader'
import CreatePizzaContent from '../components/Main/CreatePizzaContent/CreatePizzaContent'

const CreatePizzaPage: React.FC = () => {
	const [step, setStep] = useState(1)
	return (
		<View style={styles.container}>
			<CreatePizzaContentHeader step={step} setStep={setStep} />
			<View style={styles.contentBox}>
				<CreatePizzaContent step={step} setStep={setStep} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'relative',
	},
	contentBox: {
		width: '100%',
		height: '100%',
		position: 'absolute',
		display: 'flex',
		alignItems: 'center',
		top: 190,
		left: 0,
	},
})

export default CreatePizzaPage
