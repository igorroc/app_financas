import { Container, AreaInput, Input, SubmitButton, SubmitText, ErrorText } from "./styles"
import { useState, useContext } from "react"

import { AuthContext } from "../../../contexts/auth"

import { useNavigation } from "@react-navigation/native"
import { ActivityIndicator } from "react-native"

export default function SignUp() {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState("")
	const [loading, setLoading] = useState(false)

	const { signUp } = useContext(AuthContext)

	const navigation = useNavigation()

	async function handleSignUp() {
		setLoading(true)
		const response = await signUp(name, email, password)
		if (response.status == "error") {
			setError(response.error)
		} else {
			setError("")
			navigation.goBack()
		}
		setLoading(false)
	}

	return (
		<Container>
			<AreaInput>
				<Input
					placeholder="Seu nome"
					autoCorrect={false}
					value={name}
					onChangeText={(text) => setName(text)}
				/>

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

				<SubmitButton onPress={handleSignUp} disabled={loading}>
					{loading ? <ActivityIndicator /> : <SubmitText>Cadastrar</SubmitText>}
				</SubmitButton>
			</AreaInput>
		</Container>
	)
}
