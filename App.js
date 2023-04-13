import { StatusBar } from "react-native"

import { NavigationContainer } from "@react-navigation/native"

import Routes from "./src/routes"

import { AuthProvider } from "./src/contexts/auth"

export default function App() {
	return (
		<NavigationContainer>
			<AuthProvider>
				<StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
				<Routes />
			</AuthProvider>
		</NavigationContainer>
	)
}
