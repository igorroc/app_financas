import { Text } from "react-native"

import LogoImg from "../../../assets/Logo.png"
import { Container, Logo, AreaInput, Input, SubmitButton, SubmitText, ErrorText } from "./styles"
import { useState, useContext } from "react"
import { Link } from "@react-navigation/native"

import { AuthContext } from "../../../contexts/auth"
import { ActivityIndicator } from "react-native"

import { useNavigation } from "@react-navigation/native"

export default function LogIn() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState("")
	const [loading, setLoading] = useState(false)

	const { logIn } = useContext(AuthContext)

	const navigation = useNavigation()

	async function handleLogin() {
		setLoading(true)
		const response = await logIn(email, password)
		if (response.status == "error") {
			setError(response.error)
		} else {
			setError("")
		}

		setLoading(false)
	}

	return (
		<Container>
			<Logo source={LogoImg} />
			<AreaInput>
				<Input
					placeholder="Email"
					autoCorrect={false}
					autoCapitalize="none"
					value={email}
					onChangeText={(text) => setEmail(text)}
				/>

				<Input
					placeholder="Senha"
					autoCorrect={false}
					autoCapitalize="none"
					value={password}
					onChangeText={(text) => setPassword(text)}
					secureTextEntry={true}
				/>

				{error != "" && <ErrorText>{error}</ErrorText>}

				<SubmitButton onPress={handleLogin}>
					{loading ? <ActivityIndicator /> : <SubmitText>Acessar</SubmitText>}
				</SubmitButton>
			</AreaInput>
			<Link
				to="/SignUp"
				style={{
					marginTop: 20,
				}}
			>
				<Text>Criar uma conta gratuita</Text>
			</Link>
		</Container>
	)
}
