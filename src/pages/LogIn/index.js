import { Text } from "react-native"

import LogoImg from "../../assets/Logo.png"
import { Container, Logo, AreaInput, Input, SubmitButton, SubmitText, ErrorText } from "./styles"
import { useState, useContext } from "react"
import { Link } from "@react-navigation/native"

import { AuthContext } from "../../contexts/auth"
import { ActivityIndicator } from "react-native"

export default function LogIn() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState("")
	const [loading, setLoading] = useState(false)

	const { logIn } = useContext(AuthContext)

	function handleLogin() {
		setLoading(true)
		const response = logIn(email, password)
		console.log(response)
		if (!response._j) {
			setError("Email ou senha incorretos")
		} else if (response._j.status == "error") {
			setError(response._j.error)
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
