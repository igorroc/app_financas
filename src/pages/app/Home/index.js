import React, { useEffect, useState } from "react"
import { Text } from "react-native"
import { View } from "react-native"
import { Container, CardList } from "./styles"
import { ScrollView } from "react-native-gesture-handler"
import Card from "../../../components/Card"
import api from "../../../services/api"
import { format } from "date-fns"

export default function Home() {
	const [listBalance, setListBalance] = useState([])

	useEffect(() => {
		async function getBalance() {
			let dateFormatted = format(new Date(), "dd/MM/yyyy")

			await api
				.get("/balance", {
					params: {
						date: dateFormatted,
					},
				})
				.then((response) => {
					setListBalance(response.data)
				})
				.catch((error) => {
					console.log(error)
				})
		}
		getBalance()
	}, [])

	return (
		<Container>
			{/* <Card title="Saldo Atual" value={saldo} color="#3B3DBF" />
				<Card title="Entradas de Hoje" value={entradas} color="#00B94A" />
				<Card title="Saídas de Hoje" value={saidas} color="#EF463A" /> */}
			<CardList
				data={listBalance}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				keyExtractor={(item) => item.tag}
				renderItem={({ item }) => <Card tag={item.tag} value={item.saldo} />}
			/>
			<Text>Teste</Text>
		</Container>
	)
}
