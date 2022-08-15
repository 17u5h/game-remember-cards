const cardsCountByDifficulty = {
	easy: 12,
	normal: 24,
	hard: 32
}
let difficulty = cardsCountByDifficulty.easy
const suitCount = 4
const equalCardsCount = 2
const maxRank = 14
const minRank = 6
const timeToHideCards = 1000
const firstClickedCard = []
let firstClickedCardElement
let secondClickedCardElement
let seconds = 0
let minutes = 0
let timerInterval
let countToWin = 0


function createDeck(difficulty) {
	if (difficulty % 2 !== 0) {
		throw new Error('нечетное количество карт, игра не получится')
	}

	const deck = []
	for (let i = 1; i <= difficulty / equalCardsCount; i++) {
		const randomizeCard = () => {
			const rank = Math.ceil(Math.random() * (maxRank - minRank) + minRank)
			const suit = Math.ceil(Math.random() * suitCount)
			const randomCard = [suit, rank]

			if (deck.toString().includes(randomCard.toString())) {
				randomizeCard()
			} else {
				deck.push(randomCard, randomCard)
			}
		}
		randomizeCard()
	}
	return deck
}

let deck = []




