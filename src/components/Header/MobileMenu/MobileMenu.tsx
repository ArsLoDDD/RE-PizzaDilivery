import React, { useRef } from 'react'
import { Pressable, View, StyleSheet, Animated, Modal } from 'react-native'
import MobileMenuIcon from './MobileMenuIcon'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { useDispatch } from 'react-redux'
import { toggleMobileMenuStatus } from '../../../redux/slices/menusSlice'
import MobileMenuModal from './MobileMenuModal/MobileMenuModal'

const MobileMenu = () => {
	const isMenuOpen = useSelector(
		(state: RootState) => state.menus.isMobileMenuOpen
	)
	const dispatch = useDispatch()

	const rotationValue = useRef(new Animated.Value(0)).current

	const handleMenuPress = () => {
		dispatch(toggleMobileMenuStatus(!isMenuOpen))
		Animated.timing(rotationValue, {
			toValue: isMenuOpen ? 0 : 1,
			duration: 400,
			useNativeDriver: true,
		}).start()
	}

	const rotateInterpolation = rotationValue.interpolate({
		inputRange: [0, 1],
		outputRange: ['0deg', '450deg'],
	})

	return (
		<Pressable onPress={handleMenuPress}>
			<Animated.View
				style={[
					styles.menuBox,
					{
						transform: [{ rotate: rotateInterpolation }],
					},
				]}
			>
				<MobileMenuIcon />
			</Animated.View>
			<MobileMenuModal isOpen={isMenuOpen} onClose={handleMenuPress} />
		</Pressable>
	)
}

const styles = StyleSheet.create({
	menuBox: {},
})

export default MobileMenu
