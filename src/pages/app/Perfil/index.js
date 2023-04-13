import React, { useContext } from "react"
import { Text } from "react-native"
import { View } from "react-native"
import { Container, SignOutButton } from "./styles"
import { AuthContext } from "../../../contexts/auth"
import { Link } from "@react-navigation/native"

export default function Perfil() {
	const { user } = useContext(AuthContext)

	function handleSignOut() {
		console.log("Sair")
	}
    
	return (
		<Container>
			<Text>Bem vindo(a) de volta</Text>
			<Text>{user.name}</Text>
			<Link to="/Home">
				<Text>Home</Text>
			</Link>
			<SignOutButton onClick={handleSignOut}>
				<Text>Sair</Text>
			</SignOutButton>
		</Container>
	)
}
