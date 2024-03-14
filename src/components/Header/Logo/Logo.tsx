import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'react-router-native'

const Logo: React.FC = () => {
	return (
		<View>
			<Link to='/' underlayColor={'transparent'}>
				<Text style={styles.logo}>AR Resto</Text>
			</Link>
		</View>
	)
}

const styles = StyleSheet.create({
	logo: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white',
	},
})
export default Logo
