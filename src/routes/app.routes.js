import React from "react"

import { createDrawerNavigator } from "@react-navigation/drawer"

import Home from "../pages/app/Home"
import Perfil from "../pages/app/Perfil"

const AppDrawer = createDrawerNavigator()

export default function AppRoutes() {
	return (
		<AppDrawer.Navigator>
			<AppDrawer.Screen
				name="Home"
				component={Home}
				options={{
					headerTitle: "Minhas movimentações",
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
