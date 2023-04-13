import axios from "axios"
import { createContext, useState } from "react"
import api from "../services/api"

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null)

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

	return (
		<AuthContext.Provider value={{ signed: !!user, user, logIn, signUp }}>
			{children}
		</AuthContext.Provider>
	)
}
