type Levels = {
    'easy': number,
    'normal': number,
    'hard': number
}
const cardsCountByDifficulty: Levels = {
    'easy': 12,
    'normal': 24,
    'hard': 32
}
let difficulty = cardsCountByDifficulty.easy
const suitCount = 4
const equalCardsCount = 2
const maxRank = 14
const minRank = 6
const timeToHideCards = 1000
const firstClickedCard: string[] = []
let firstClickedCardElement: HTMLElement
let secondClickedCardElement: HTMLElement
let seconds = 0
let minutes = 0
let timerInterval: NodeJS.Timer
let countToWin = 0


function createDeck(difficulty: number) {

    if (difficulty % 2 !== 0) {
        throw new Error('нечетное количество карт, игра не получится')
    }

    const deck: string[][] = []
    for (let i = 1; i <= difficulty / equalCardsCount; i++) {
        const randomizeCard = () => {
            const rank = Math.ceil(Math.random() * (maxRank - minRank) + minRank).toString()
            const suit = Math.ceil(Math.random() * suitCount).toString()
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

let deck: string[][] = []




