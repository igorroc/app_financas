import axios from "axios"
import { createContext, useEffect, useState } from "react"
import api from "../services/api"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null)

	useEffect(() => {
		async function loadStorageData() {
			const loggedUser = await AsyncStorage.getItem("@RNAuth:user")

			if (loggedUser) {
				let parsedUser = JSON.parse(loggedUser)
				await api
					.get("/me", {
						headers: {
							Authorization: `Bearer ${parsedUser.token}`,
						},
					})
					.then((res) => {
						setUser(res.data)
						api.defaults.headers["Authorization"] = `Bearer ${parsedUser.token}`
					})
			}
		}

		loadStorageData()
	}, [])

	async function logIn(email, password) {
		let APIResponse = {}

		if (!email || !password) {
			return { status: "error", error: "Preencha todos os campos" }
		}

		await api
			.post("/login", {
				email,
				password,
			})
			.then((res) => {
				APIResponse.user = res.data
			})
			.catch((error) => {
				APIResponse.error = error
			})

		if (APIResponse.error) {
			return { status: "error", error: "Email ou senha incorretos" }
		}

		setUser(APIResponse.user)
		api.defaults.headers["Authorization"] = `Bearer ${APIResponse.user.token}`
		await AsyncStorage.setItem("@RNAuth:user", JSON.stringify(APIResponse.user))

		return { status: "success", user: APIResponse.user }
	}

	async function signUp(name, email, password) {
		let APIResponse = {}

		if (!name || !email || !password) {
			return { status: "error", error: "Preencha todos os campos" }
		}

		await api
			.post("/users", {
				name,
				email,
				password,
			})
			.then((res) => {
				APIResponse.user = res.data
			})
			.catch((error) => {
				APIResponse.error = error
			})

		if (APIResponse.error) {
			return { status: "error", error: "Erro ao cadastrar usuário" }
		}

		return { status: "success", user: APIResponse.user }
	}

	async function logOut() {
		setUser(null)
		await AsyncStorage.removeItem("@RNAuth:user")
	}

	return (
		<AuthContext.Provider value={{ signed: !!user, user, logIn, signUp, logOut }}>
			{children}
		</AuthContext.Provider>
	)
}
