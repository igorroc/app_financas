import { DrawerItemList } from "@react-navigation/drawer"
import React, { useContext } from "react"
import { Text, View } from "react-native"
import { Logo, Name, Wrapper } from "./styles"

import LogoImg from "../../assets/Logo.png"
import { AuthContext } from "../../contexts/auth"

export default function CustomDrawer(props) {
	const { user } = useContext(AuthContext)

	return (
		<View>
			<Wrapper>
				<Logo source={LogoImg} />
				<Text>Bem-vindo(a)</Text>
				<Name>{user.name}</Name>
			</Wrapper>
			<DrawerItemList {...props} />
		</View>
	)
}
