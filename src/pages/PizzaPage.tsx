import {
	FlatList,
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import { useLocation } from 'react-router'
import PizzasListItemTextBox from '../components/Main/PizzasList/PizzasListItem/PizzasListItemTextBox/PizzasListItemTextBox'
import PizzasListItem from '../components/Main/PizzasList/PizzasListItem/PizzasListItem'
import { IPizza } from '../types/pizzaTypes'

const addToPizzaOrder: IPizza[] = [
	{
		id: 1,
		name: 'Pepsi',
		description: '0.5L',
		img: 'https://png2.cleanpng.com/sh/69bcfa5472d29d450212eb843cfa4f4d/L0KzQYq3VsA1N5p5hJH0aYP2gLBuTgBmeKRuRdH3ZT3pecvDmb1leppzgAU2cHXzg7q0jfF5NZVufeY2cHXzg7q0VfNnPmk1TKhqMki3cYG1Vsc2Pmg6Tag6NUW8RoaBVcY3Pmc6T5D5bne=/kisspng-pepsi-one-fizzy-drinks-pepsi-max-diet-pepsi-5cf68046a284a0.6756755615596585666657.png',
		price: 35,
		isVegan: false,
		isSpicy: false,
		isSale: false,
		salePrice: null,
		isNew: false,
	},
	{
		id: 2,
		name: 'Pepsi',
		description: '1L',
		img: 'https://png2.cleanpng.com/sh/69bcfa5472d29d450212eb843cfa4f4d/L0KzQYq3VsA1N5p5hJH0aYP2gLBuTgBmeKRuRdH3ZT3pecvDmb1leppzgAU2cHXzg7q0jfF5NZVufeY2cHXzg7q0VfNnPmk1TKhqMki3cYG1Vsc2Pmg6Tag6NUW8RoaBVcY3Pmc6T5D5bne=/kisspng-pepsi-one-fizzy-drinks-pepsi-max-diet-pepsi-5cf68046a284a0.6756755615596585666657.png',
		price: 45,
		isVegan: false,
		isSpicy: false,
		isSale: false,
		salePrice: null,
		isNew: false,
	},
	{
		id: 3,
		name: 'Pepsi',
		description: '1.5L',
		img: 'https://png2.cleanpng.com/sh/69bcfa5472d29d450212eb843cfa4f4d/L0KzQYq3VsA1N5p5hJH0aYP2gLBuTgBmeKRuRdH3ZT3pecvDmb1leppzgAU2cHXzg7q0jfF5NZVufeY2cHXzg7q0VfNnPmk1TKhqMki3cYG1Vsc2Pmg6Tag6NUW8RoaBVcY3Pmc6T5D5bne=/kisspng-pepsi-one-fizzy-drinks-pepsi-max-diet-pepsi-5cf68046a284a0.6756755615596585666657.png',
		price: 55,
		isVegan: false,
		isSpicy: false,
		isSale: false,
		salePrice: null,
		isNew: false,
	},
	{
		id: 4,
		name: 'Pepsi',
		description: '2L',
		img: 'https://png2.cleanpng.com/sh/69bcfa5472d29d450212eb843cfa4f4d/L0KzQYq3VsA1N5p5hJH0aYP2gLBuTgBmeKRuRdH3ZT3pecvDmb1leppzgAU2cHXzg7q0jfF5NZVufeY2cHXzg7q0VfNnPmk1TKhqMki3cYG1Vsc2Pmg6Tag6NUW8RoaBVcY3Pmc6T5D5bne=/kisspng-pepsi-one-fizzy-drinks-pepsi-max-diet-pepsi-5cf68046a284a0.6756755615596585666657.png',
		price: 65,
		isVegan: false,
		isSpicy: false,
		isSale: false,
		salePrice: null,
		isNew: false,
	},
]

const PizzaPage: React.FC = () => {
	const location = useLocation()
	const { data } = location.state
	return (
		<ScrollView
			style={styles.container}
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{
				alignItems: 'center',
				paddingBottom: 80,
			}}
		>
			<Image
				source={{
					uri:
						Platform.OS === 'ios'
							? data.img
							: 'https://www.dominos.bg/images/error404.png',
				}}
				style={styles.pizzaImg}
			/>
			<View
				style={{
					height: 200,
					marginBottom: 50,
				}}
			>
				<PizzasListItemTextBox big={true} data={data} />
			</View>

			{/* <FlatList
				data={addToPizzaOrder}
				renderItem={({ item }) => <PizzasListItem data={item} big={true} />}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{
					flexGrow: 1,
					backgroundColor: 'blue',
				}}
			/> */}
			<ScrollView
				horizontal={true}
				style={{}}
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{
					width: 1000,
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					paddingHorizontal: 30,
					paddingBottom: 20,
				}}
			>
				{addToPizzaOrder.map((item, index) => (
					<PizzasListItem key={index} data={item} big={true} />
				))}
			</ScrollView>
		</ScrollView>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20,
	},
	pizzaImg: {
		width: 200,
		height: 200,
	},
})
export default PizzaPage
