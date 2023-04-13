import React, { useContext, useState } from "react"
import { Text } from "react-native"
import {
	AreaInput,
	Container,
	CustomButton,
	CustomButtonText,
	ErrorText,
	Input,
	SubmitButton,
	SubmitButtonText,
	Title,
} from "./styles"
import { AuthContext } from "../../../contexts/auth"
import { useNavigation } from "@react-navigation/native"
import { Button } from "react-native"
import { View } from "react-native"
import api from "../../../services/api"
import { format } from "date-fns"

export default function Registrar() {
	const { user } = useContext(AuthContext)
	const navigation = useNavigation()

	const [name, setName] = useState("")
	const [value, setValue] = useState("")
	const [type, setType] = useState("receita")

	const [errors, setErrors] = useState({
		name: "",
		value: "",
	})

	async function handleSubmit() {
		let hasErrors = false
		setErrors({ name: "", value: "" })

		if (name.length < 3) {
			hasErrors = true
			setErrors((old) => ({ ...old, name: "Nome muito curto" }))
		}

		if (typeof Number(value) != "number" || Number(value) <= 0) {
			hasErrors = true
			setErrors((old) => ({ ...old, value: "Valor inválido" }))
		}

		if (hasErrors) return

		await api
			.post("/receive", {
				description: name,
				value: Number(value),
				type,
				date: format(new Date(), "dd/MM/yyyy"),
			})
			.then(() => {
				setName("")
				setValue("")
				navigation.navigate("Home")
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<Container>
			<Title>Registrar</Title>
			<AreaInput>
				<Input placeholder="Nome" value={name} onChangeText={(text) => setName(text)} />
				{errors.name != "" && <ErrorText>{errors.name}</ErrorText>}

				<Input
					placeholder="Valor desejado"
					value={value}
					onChangeText={(text) => setValue(text)}
					inputMode="numeric"
				/>
				{errors.value != "" && <ErrorText>{errors.value}</ErrorText>}

				<View
					style={{
						flexDirection: "row",
						width: "100%",
						justifyContent: "space-between",
					}}
				>
					<CustomButton
						onPress={() => setType("receita")}
						$active={type == "receita"}
						$color="#00B94A"
					>
						<CustomButtonText $active={type == "receita"}>Receita</CustomButtonText>
					</CustomButton>
					<CustomButton
						onPress={() => setType("despesa")}
						$active={type == "despesa"}
						$color="#EF463A"
					>
						<CustomButtonText $active={type == "despesa"}>Despesa</CustomButtonText>
					</CustomButton>
				</View>

				<SubmitButton onPress={handleSubmit}>
					<SubmitButtonText>Registrar</SubmitButtonText>
				</SubmitButton>
			</AreaInput>
		</Container>
	)
}
