import React from "react"
import { CardContainer, Title, Value } from "./styles"
import { formatNumberToCurrency } from "../../utils/formatNumber"

export default function Card(props) {
	const title = {
		saldo: "Saldo Atual",
		receita: "Entradas de Hoje",
		despesa: "Saídas de Hoje",
	}

	const color = {
		saldo: "#3B3DBF",
		receita: "#00B94A",
		despesa: "#EF463A",
	}

	return (
		<CardContainer $color={color[props.tag]}>
			<Title>{title[props.tag]}</Title>
			<Value>{formatNumberToCurrency(props.value)}</Value>
		</CardContainer>
	)
}
