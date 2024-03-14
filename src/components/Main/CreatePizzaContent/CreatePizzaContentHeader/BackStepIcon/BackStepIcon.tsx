import { Pressable, StyleSheet, View } from 'react-native'
import { Path, Svg } from 'react-native-svg'
import { orangeGradient } from '../../../../../utils/constants'

interface BackStepIconProps {
	onClick: () => void
}
const BackStepIcon: React.FC<BackStepIconProps> = ({ onClick }) => {
	return (
		<Pressable
			style={({ pressed }) => [
				styles.container,
				{
					backgroundColor: pressed ? '#f6f3f1' : 'white',
				},
			]}
			onPress={onClick}
		>
			<Svg
				style={{
					width: 30,
					height: 25,
				}}
				fill='none'
				viewBox='0 0 24 24'
				strokeWidth='3.5'
				stroke={orangeGradient}
			>
				<Path
					stroke-linecap='round'
					stroke-linejoin='round'
					d='M15.75 19.5 8.25 12l7.5-7.5'
				/>
			</Svg>
		</Pressable>
	)
}
const styles = StyleSheet.create({
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: 40,
		width: 40,
		borderRadius: 50,
		backgroundColor: 'white',
	},
})
export default BackStepIcon
