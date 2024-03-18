import { Platform, Text, View } from 'react-native'
import CreatePizzaToppingPartItem, {
	ToppingPart,
} from './CreatePizzaToppingPartItem/CreatePizzaToppingPartItem'

export interface CreatePizzaToppingPartProps {
	currentPart: ToppingPart
	setCurrentPart: (part: ToppingPart) => void
}

const CreatePizzaToppingPart: React.FC<CreatePizzaToppingPartProps> = ({
	currentPart,
	setCurrentPart,
}) => {
	return (
		<View>
			<View
				style={{
					marginBottom: 15,
				}}
			>
				<Text
					style={{
						marginBottom: 10,
						fontSize: 18,
						fontWeight: 'bold',
						opacity: 0.6,
					}}
				>
					Choose Topping parts
				</Text>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
						gap: Platform.OS === 'ios' ? 0 : 10,
					}}
				>
					<CreatePizzaToppingPartItem
						part={ToppingPart.LEFT}
						currentPart={currentPart}
						setCurrentPart={setCurrentPart}
					/>
					<CreatePizzaToppingPartItem
						part={ToppingPart.RIGHT}
						currentPart={currentPart}
						setCurrentPart={setCurrentPart}
					/>
				</View>
			</View>
		</View>
	)
}
export default CreatePizzaToppingPart
