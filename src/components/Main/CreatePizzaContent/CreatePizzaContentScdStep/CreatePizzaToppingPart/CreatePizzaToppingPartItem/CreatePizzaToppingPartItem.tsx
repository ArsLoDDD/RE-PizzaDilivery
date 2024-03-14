import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

export enum ToppingPart {
	LEFT = 'Left',
	RIGHT = 'Right',
}
interface CreatePizzaToppingPartItemProps {
	part: ToppingPart
	currentPart: ToppingPart
	setCurrentPart: (part: ToppingPart) => void
}
const CreatePizzaToppingPartItem: React.FC<CreatePizzaToppingPartItemProps> = ({
	part,
	currentPart,
	setCurrentPart,
}) => {
	return (
		<Pressable onPress={() => setCurrentPart(part)} style={styles.container}>
			{({ pressed }) => (
				<>
					{part === ToppingPart.LEFT && (
						<Text
							style={[
								styles.text,
								{
									color: currentPart === part ? 'red' : 'black',
								},
							]}
						>
							{part} Half
						</Text>
					)}
					<Image
						source={
							part === ToppingPart.LEFT
								? require('./../../../../../../../assets/bgImage/pizzaLeftSide.png')
								: require('./../../../../../../../assets/bgImage/pizzaRightSide.png')
						}
						style={{
							opacity: currentPart === part ? 1 : 0.5,
							transform: [{ scale: pressed ? 1.1 : 1 }],
						}}
					/>
					{part === ToppingPart.RIGHT && (
						<Text
							style={[
								styles.text,
								{
									color: currentPart === part ? 'red' : 'black',
								},
							]}
						>
							{part} Half
						</Text>
					)}
				</>
			)}
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: '47%',
		gap: 20,
	},
	text: {
		fontSize: 18,
		fontWeight: 'bold',
		opacity: 0.6,
	},
})
export default CreatePizzaToppingPartItem
