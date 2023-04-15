export function formatNumberToCurrency(number) {
	// Verifica se o número é um número válido
	if (isNaN(number)) {
		return "Valor inválido"
	}

	// Formata o número como uma string monetária
	const formattedNumber = number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
	return `R$ ${formattedNumber}`
}
