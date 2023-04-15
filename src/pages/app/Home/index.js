import React, { useEffect, useState } from "react"
import { Alert, Modal, RefreshControl, Text } from "react-native"
import { View } from "react-native"
import { Container, CardList, HistoryList, CalendarButton, Warning } from "./styles"
import { ScrollView } from "react-native-gesture-handler"
import Card from "../../../components/Card"
import api from "../../../services/api"
import { format } from "date-fns"
import { TouchableHighlight } from "react-native"
import { TouchableOpacity } from "react-native"
import { formatNumberToCurrency } from "../../../utils/formatNumber"

import Icon from "react-native-vector-icons/FontAwesome"
import HistoryItem from "../../../components/HistoryItem"
import { useIsFocused } from "@react-navigation/native"
import CalendarModal from "../../../components/CalendarModal"

export default function Home() {
	const isFocused = useIsFocused()
	const [listBalance, setListBalance] = useState([])
	const [history, setHistory] = useState([])
	const [currentDate, setCurrentDate] = useState(new Date())

	const [showModal, setShowModal] = useState(false)

	const [refreshing, setRefreshing] = React.useState(false)

	const onRefresh = React.useCallback(() => {
		setRefreshing(true)
		setTimeout(() => {
			setRefreshing(false)
		}, 2000)
	}, [])

	useEffect(() => {
		let isMounted = true

		async function getBalance() {
			let dateFormatted = format(currentDate, "dd/MM/yyyy")

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

		async function getHistory() {
			let dateFormatted = format(currentDate, "dd/MM/yyyy")

			await api
				.get("/receives", {
					params: {
						date: dateFormatted,
					},
				})
				.then((response) => {
					setHistory(response.data)
				})
				.catch((error) => {
					console.log(error)
				})
		}

		getBalance()
		getHistory()

		return () => {
			isMounted = false
		}
	}, [isFocused, currentDate])

	function handleLongPress(item) {
		Alert.alert("Atenção", `Deseja excluir a movimentação ${item.description}?`, [
			{
				text: "Cancelar",
				style: "cancel",
			},
			{ text: "Deletar", onPress: () => handleDeleteItem(item) },
		])
	}

	async function handleDeleteItem(item) {
		await api
			.delete("/receives/delete", {
				params: {
					item_id: item.id,
				},
			})
			.then((response) => {
				console.log(response.data)
			})
			.catch((error) => {
				console.log(error)
			})
		setCurrentDate(new Date())
	}

	function handleModalToggle() {
		setShowModal(!showModal)
	}

	return (
		<Container>
			<CardList
				data={listBalance}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				keyExtractor={(item) => item.tag}
				renderItem={({ item }) => <Card tag={item.tag} value={item.saldo} />}
			/>
			<CalendarButton onPress={handleModalToggle}>
				<Icon name="calendar" size={20} />
				<Text>Últimas movimentações</Text>
			</CalendarButton>

			{history.length === 0 ? (
				<Warning>
					Você não teve movimentações no dia {format(currentDate, "dd/MM/yyyy")}
				</Warning>
			) : (
				<HistoryList
					data={history}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<HistoryItem item={item} longPress={handleLongPress} />
					)}
				/>
			)}

			<Modal visible={showModal} animationType="slide" transparent={true}>
				<CalendarModal
					closeModal={() => setShowModal(false)}
					setSelectedDate={setCurrentDate}
				/>
			</Modal>
		</Container>
	)
}
