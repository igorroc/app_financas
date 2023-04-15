import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { HistoryRow } from "./styles"
import { formatNumberToCurrency } from "../../utils/formatNumber"

import Icon from "react-native-vector-icons/MaterialIcons"
import { LinearGradient } from "expo-linear-gradient"

export default function HistoryItem(props) {
	function handleLongPress() {
		props.longPress(props.item)
	}

	return (
		<HistoryRow onLongPress={handleLongPress} $type={props.item.type} activeOpacity={0.8}>
			<LinearGradient
				style={{
					flex: 1,
					flexDirection: "row",
					borderRadius: 10,
					padding: 10,
					alignItems: "center",
					justifyContent: "space-between",
				}}
				colors={["transparent", props.item.type == "receita" ? "#00b94a50" : "#ef463a50"]}
				locations={[0.4, 1]}
				start={{
					x: 0,
					y: 0.5,
				}}
				end={{
					x: 1,
					y: 0.5,
				}}
			>
				<View>
					<Text
						style={{
							fontWeight: "light",
						}}
					>
						{props.item.description}
					</Text>
					<Text
						style={{
							fontWeight: "bold",
							fontSize: 18,
						}}
					>
						{formatNumberToCurrency(props.item.value)}
					</Text>
				</View>
				<Icon
					name={props.item.type == "receita" ? "attach-money" : "money-off"}
					size={30}
					color={props.item.type == "receita" ? "#00b94a" : "#ef463a"}
				/>
			</LinearGradient>
		</HistoryRow>
	)
}
