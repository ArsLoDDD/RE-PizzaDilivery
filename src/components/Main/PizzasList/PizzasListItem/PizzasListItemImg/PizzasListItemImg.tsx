import { View, Image, StyleSheet, Platform } from 'react-native'

interface PizzasListItemImgProps {
	img: string | null
	isCreatePizza?: boolean
}

const PizzasListItemImg: React.FC<PizzasListItemImgProps> = ({
	img,
	isCreatePizza = false,
}) => {
	return (
		<>
			{isCreatePizza ? (
				<Image
					style={styles.createPizzaImage}
					source={require('../../../../../../assets/bgImage/bgCreatePizza.png')}
				/>
			) : (
				<View
					style={[
						styles.createPizzaImage,
						{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						},
					]}
				>
					{img && (
						<Image
							style={{ width: '70%', height: '90%' }}
							source={{
								uri:
									Platform.OS === 'ios'
										? img
										: 'https://www.dominos.bg/images/error404.png',
							}}
						/>
					)}
				</View>
			)}
		</>
	)
}

const styles = StyleSheet.create({
	createPizzaImage: {
		width: '100%',
		height: '60%',
		objectFit: 'cover',
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
	},
})
export default PizzasListItemImg
