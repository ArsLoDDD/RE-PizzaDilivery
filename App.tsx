import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import { NativeRouter } from 'react-router-native'
import AppContent from './src/AppContent'
const data = require('./src/apis/DB/pizzasData')
export default function App() {
	return (
		<NativeRouter>
			<Provider store={store}>
				<AppContent />
			</Provider>
		</NativeRouter>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
