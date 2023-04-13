import React from "react"

import { createNativeStackNavigator } from "@react-navigation/native-stack"

import LogIn from "../pages/LogIn"
import SignUp from "../pages/SignUp"

const AuthStack = createNativeStackNavigator()

export default function AuthRoutes() {
	return (
		<AuthStack.Navigator>
			<AuthStack.Screen
				name="LogIn"
				component={LogIn}
				options={{
					headerShown: false,
				}}
			/>
			<AuthStack.Screen
				name="SignUp"
				component={SignUp}
				options={{
					headerTitle: "Voltar",
					headerStyle: {
						backgroundColor: "#3b3dbf",
					},
					headerTintColor: "#fff",
				}}
			/>
		</AuthStack.Navigator>
	)
}
