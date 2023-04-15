import styled from "styled-components"

export const CardContainer = styled.View`
	width: 300px;
	height: 150px;
	background: ${(props) => props.$color};
	border-radius: 10px;
	margin-right: 30px;
	justify-content: center;
	padding-left: 30px;
`

export const Title = styled.Text`
	font-size: 16px;
	color: #fff;
`

export const Value = styled.Text`
	font-size: 30px;
	color: #fff;
`
