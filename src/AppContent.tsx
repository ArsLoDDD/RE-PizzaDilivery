import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import AppRoutes from './AppRoutes'
import Header from './components/Header/Header'
import { useLocation, useNavigate } from 'react-router'
import { useEffect } from 'react'
import CartBtn from './components/Main/CartBtn/CartBtn'
import TypesOfPizzas from './components/Main/TypesOfPizzas/TypesOfPizzas'

const AppContent: React.FC = () => {
	const path = useLocation().pathname

	return (
		<View
			style={{
				flex: 1,
				position: 'relative',
				backgroundColor: '#f6f3f1',
			}}
		>
			{path !== '/create' ? <Header /> : null}
			{path !== '/cart' && path !== '/create' ? <CartBtn /> : null}
			{path === '/' ? <TypesOfPizzas /> : null}
			<View
				style={{
					flex: 1,
				}}
			>
				<AppRoutes />
			</View>
		</View>
	)
}
export default AppContent
