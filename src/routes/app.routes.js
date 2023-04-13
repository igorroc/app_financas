import React from "react"

import { createDrawerNavigator } from "@react-navigation/drawer"

import Home from "../pages/app/Home"
import Perfil from "../pages/app/Perfil"
import Registrar from "../pages/app/Registrar"

const AppDrawer = createDrawerNavigator()

export default function AppRoutes() {
	return (
		<AppDrawer.Navigator
			screenOptions={{
				// headerShown: false,

				drawerStyle: {
					paddingTop: 20,
				},

				drawerActiveBackgroundColor: "#3b3dbf",
				drawerActiveTintColor: "#fff",

				drawerInactiveBackgroundColor: "#3b3dbf20",
				drawerInactiveTintColor: "#232323",
			}}
		>
			<AppDrawer.Screen
				name="Home"
				component={Home}
				options={{
					headerTitle: "Minhas movimentações",
				}}
			/>
			<AppDrawer.Screen
				name="Registrar"
				component={Registrar}
				options={{
					headerTitle: "Registrando movimentações",
				}}
			/>
			<AppDrawer.Screen
				name="Perfil"
				component={Perfil}
				options={{
					headerTitle: "Meu perfil",
				}}
			/>
		</AppDrawer.Navigator>
	)
}
