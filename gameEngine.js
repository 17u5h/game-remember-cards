function shuffleDeckAndPushCard() {
	const randomIndex = Math.floor(Math.random() * deck.length)
	const randomCard = deck[randomIndex]
	deck.splice(randomIndex, 1)
	return randomCard
}

function gameEngine(event) {

	const target = event.target
	if (target.classList.contains('play-field')) return

	if (firstClickedCard.length !== 0) {
		const secondSuit = target.dataset.suit
		const secondRank = target.dataset.rank

		target.classList.add(`play-field__card_flipped-${secondSuit}-${secondRank}`)

		if (firstClickedCard[0] === secondSuit && firstClickedCard[1] === secondRank) {
			console.log('right')
			firstClickedCard.splice(0)
			firstClickedCardElement = undefined
			secondClickedCardElement = undefined
		} else {
			console.log('wrong')
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

