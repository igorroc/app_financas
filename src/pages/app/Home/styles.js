import styled from "styled-components"

export const Container = styled.View`
	flex: 1;
	padding: 10px;
`

export const CardList = styled.FlatList`
	margin: 10px 0;
	max-height: 170px;
	min-height: 170px;
`

export const HistoryList = styled.FlatList`
	margin-top: 20px;
`

export const CalendarButton = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	gap: 10px;
`

export const Warning = styled.Text`
	font-size: 16px;
	color: #aaa;
	padding: 10px;
`
