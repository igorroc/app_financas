import styled from "styled-components/native"

export const Container = styled.View`
	flex: 1;
	background-color: #f0f4ff;
	align-items: center;
	justify-content: center;
`

export const Logo = styled.Image`
	width: 184px;
	height: 150px;
	margin-bottom: 50px;
`

export const AreaInput = styled.View`
	flex-direction: column;
	width: 100%;
	justify-content: center;
	align-items: center;
`

export const Input = styled.TextInput`
	background-color: #fff;
	width: 90%;
	font-size: 17px;
	color: #222;
	margin-bottom: 15px;
	padding: 10px;
	border-radius: 7px;
`

export const SubmitButton = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;
	background-color: #3b3dbf;
	width: 90%;
	height: 45px;
	border-radius: 7px;
`

export const SubmitText = styled.Text`
	font-size: 20px;
	font-weight: bold;
	color: #fff;
`

export const ErrorText = styled.Text`
	color: #f73e3e;
	padding: 10px 20px;
	background-color: #f7665e50;
	border-radius: 7px;
	margin-bottom: 15px;
`
