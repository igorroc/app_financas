import React, { useContext } from "react"
import { Text } from "react-native"
import { View } from "react-native"
import { Container, SignOutButton, CustomLink, CustomLinkText, Name } from "./styles"
import { AuthContext } from "../../../contexts/auth"
import { Link, useNavigation } from "@react-navigation/native"

export default function Perfil() {
	const { user, logOut } = useContext(AuthContext)

	const navigation = useNavigation()

	function handleSignOut() {
		logOut()
	}

	function goToHome() {
		navigation.navigate("Home")
	}

	return (
		<Container>
			<Text>Bem vindo(a) de volta</Text>
			<Name>{user.name}</Name>
			<CustomLink onPress={goToHome}>
				<CustomLinkText>Home</CustomLinkText>
			</CustomLink>
			<SignOutButton onPress={handleSignOut}>
				<Text>Sair</Text>
			</SignOutButton>
		</Container>
	)
}
