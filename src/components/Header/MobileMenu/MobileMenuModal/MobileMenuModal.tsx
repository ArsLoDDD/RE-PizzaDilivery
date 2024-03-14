import { useState } from 'react'
import { Modal, Pressable, Text, View } from 'react-native'
import { useNavigate } from 'react-router-native'
import { orangeGradient } from '../../../../utils/constants'

interface MobileMenuModalProps {
	isOpen: boolean
	onClose: () => void
}

interface MobileModalMenuItem {
	id: number
	name: string
	link: string
}

const mobileMenuItems: MobileModalMenuItem[] = [
	{
		id: 1,
		name: 'Home',
		link: '/',
	},
	{
		id: 2,
		name: 'Create Pizza',
		link: '/create',
	},
	{
		id: 3,
		name: 'Cart',
		link: '/cart',
	},
]

const MobileMenuModal: React.FC<MobileMenuModalProps> = ({
	isOpen,
	onClose,
}) => {
	const navigate = useNavigate()

	return (
		<Modal animationType='slide' visible={isOpen}>
			<View
				style={{
					flex: 1,
					backgroundColor: 'white',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				{mobileMenuItems.map(item => (
					<Pressable
						onPress={() => {
							navigate(item.link)
							onClose()
						}}
						style={({ pressed }) => [
							{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								width: '50%',
								padding: 10,
								marginBottom: 10,
								borderRadius: 40,
								backgroundColor: pressed ? '#00000010' : 'white',
							},
						]}
						key={item.id}
					>
						{({ pressed }) => (
							<Text
								style={{
									fontSize: 30,
									color: pressed ? orangeGradient : 'black',
								}}
							>
								{item.name}
							</Text>
						)}
					</Pressable>
				))}
			</View>
		</Modal>
	)
}
export default MobileMenuModal
