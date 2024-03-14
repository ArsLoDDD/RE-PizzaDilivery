import { View, Text, ScrollView } from 'react-native'
import PizzasList from '../components/Main/PizzasList/PizzasList'

const HomePage: React.FC = (): JSX.Element => {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: '#f6f3f1',
			}}
		>
			<PizzasList />
		</View>
	)
}

export default HomePage
