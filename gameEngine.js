function shuffleDeckAndPushCard() {
	const randomIndex = Math.floor(Math.random() * deck.length)
	const randomCard = deck[randomIndex]
	deck.splice(randomIndex, 1)
	return randomCard
}

function gameEngine(event) {

	const target = event.target
	if (target.classList.contains('play-field')) return
	const cards = document.querySelectorAll('.play-field__card')

	if (firstClickedCard.length !== 0) {
		const secondSuit = target.dataset.suit
		const secondRank = target.dataset.rank

		target.classList.add(`play-field__card_flipped-${secondSuit}-${secondRank}`)


		if (firstClickedCard[0] === secondSuit && firstClickedCard[1] === secondRank) {

			firstClickedCard.splice(0)
			firstClickedCardElement = undefined
			secondClickedCardElement = undefined
			countToWin += 2
			if (countToWin === cards.length) renderFinishScreen()
		} else {
			firstClickedCard.splice(0)
			secondClickedCardElement = target
		}
	} else {
		if (secondClickedCardElement) {
			secondClickedCardElement.classList.remove(`play-field__card_flipped-${secondClickedCardElement.dataset.suit}-${secondClickedCardElement.dataset.rank}`)
		}
		if (firstClickedCardElement) {
			firstClickedCardElement.classList.remove(`play-field__card_flipped-${firstClickedCardElement.dataset.suit}-${firstClickedCardElement.dataset.rank}`)
		}
		const firstSuit = target.dataset.suit
		const firstRank = target.dataset.rank
		firstClickedCard.push(firstSuit, firstRank)
		target.classList.add(`play-field__card_flipped-${firstSuit}-${firstRank}`)
		firstClickedCardElement = target

	}
}

function startTimer(timerField) {
	timerInterval = setInterval(() => {
		if (seconds <= 9) {
			timerField.textContent = minutes.toString() + '.0' + seconds.toString()
			seconds++
		}
		if (seconds > 9){
			timerField.textContent = minutes.toString() + '.' + seconds.toString()
			seconds++
		}
		if (seconds > 59){
			timerField.textContent = minutes.toString() + '.' + seconds.toString()
			minutes++
			seconds = 0
		}
	},1000)

}
