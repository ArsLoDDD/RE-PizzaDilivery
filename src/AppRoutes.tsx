import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import CreatePizzaPage from './pages/CreatePizzaPage'
import { Text } from 'react-native'
import PizzaPage from './pages/PizzaPage'

const AppRoutes: React.FC = (): JSX.Element => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/cart' element={<CartPage />} />
			<Route path='/create' element={<CreatePizzaPage />} />
			<Route path='/pizza/:id' element={<PizzaPage />} />
			<Route path='*' element={<h1>Not Found</h1>} />
		</Routes>
	)
}

export default AppRoutes
