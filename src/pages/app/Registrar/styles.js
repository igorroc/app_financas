import styled from "styled-components"

export const Container = styled.View`
	flex: 1;
	padding: 30px;
`

export const Title = styled.Text`
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 30px;
`

export const AreaInput = styled.View`
	flex-direction: column;
	width: 100%;
	justify-content: center;
	align-items: center;
`

export const Input = styled.TextInput`
	background-color: #fff;
	width: 100%;
	font-size: 17px;
	color: #222;
	margin-bottom: 15px;
	padding: 10px;
	border-radius: 7px;
`

export const CustomButton = styled.TouchableOpacity`
	width: 40%;
	margin-bottom: 15px;
	background-color: ${(props) => (props.$active ? props.$color : "#ddd")};
	padding: 10px;
	border-radius: 7px;
	justify-content: center;
	align-items: center;
`

export const CustomButtonText = styled.Text`
	font-size: 17px;
	color: ${(props) => (props.$active ? "#fff" : "#232323")};
	font-weight: ${(props) => (props.$active ? "bold" : "normal")};
`

export const SubmitButton = styled.TouchableOpacity`
	width: 100%;
	margin-bottom: 15px;
	background-color: #3b3dbf;
	padding: 10px;
	border-radius: 7px;
	justify-content: center;
	align-items: center;
`

export const SubmitButtonText = styled.Text`
	font-size: 17px;
	color: #fff;
	font-weight: bold;
`

export const ErrorText = styled.Text`
	width: 100%;
	font-size: 15px;
	background-color: #ef463a20;
	color: #ef463a;
	margin-bottom: 15px;
	padding: 10px;
`
