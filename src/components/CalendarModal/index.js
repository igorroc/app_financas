import React, { useState } from "react"
import { Text, TouchableWithoutFeedback, View } from "react-native"
import { Container, WrapperCalendar } from "./styles"

import { Calendar, LocaleConfig } from "react-native-calendars"

export default function CalendarModal(props) {
	function handleDayPress(day) {
		props.setSelectedDate(new Date(day.dateString))
		props.closeModal()
	}

	return (
		<Container>
			<TouchableWithoutFeedback onPress={props.closeModal}>
				<View style={{ flex: 1, backgroundColor: "#0005" }}></View>
			</TouchableWithoutFeedback>
			<WrapperCalendar>
				<Calendar onDayPress={handleDayPress} />
			</WrapperCalendar>
		</Container>
	)
}
