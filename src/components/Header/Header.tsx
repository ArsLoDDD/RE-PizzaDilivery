import {
	StatusBar,
	View,
	ImageBackground,
	StyleSheet,
	Platform,
	useWindowDimensions,
} from 'react-native'
import Logo from './Logo/Logo'
import MobileMenu from './MobileMenu/MobileMenu'
import { orangeGradient } from '../../utils/constants'

const Header: React.FC = () => {
	const { height, width } = useWindowDimensions()

	return (
		<>
			<StatusBar barStyle='light-content' />
			<View
				style={[
					styles.headerHome,
					{
						...Platform.select({
							ios: {
								height: height < 500 ? 70 : 110,
							},
							android: {
								height: 80,
							},
						}),
					},
				]}
			>
				<ImageBackground
					source={require('../../../assets/bgImage/bgPizzaHeader.png')}
					style={[
						styles.headerHomeBG,
						{
							paddingLeft: height < 500 ? 40 : 15,
						},
					]}
				>
					<View
						style={[
							styles.headerLogoMenuBox,
							{
								marginBottom: height < 500 ? 0 : 12,
								justifyContent: height < 500 ? 'center' : 'flex-start',
								alignItems: height < 500 ? 'center' : 'flex-end',
							},
						]}
					>
						<MobileMenu />
						<Logo />
					</View>
				</ImageBackground>
			</View>
		</>
	)
}
export default Header

const styles = StyleSheet.create({
	headerHome: {
		width: '100%',
		overflow: 'hidden',
	},
	headerHomeBG: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'flex-end',
		height: '100%',
		paddingLeft: 15,
		resizeMode: 'cover',
		backgroundColor: orangeGradient,
	},
	headerLogoMenuBox: {
		display: 'flex',
		flexDirection: 'row',
		gap: 13,
		height: '100%',
		...Platform.select({
			android: {
				height: '100%',
				display: 'flex',
				alignItems: 'center',
				marginBottom: 0,
			},
		}),
	},
})
