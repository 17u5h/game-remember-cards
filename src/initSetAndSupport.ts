type Levels = {
  easy: number
  normal: number
  hard: number
}
export const cardsCountByDifficulty: Levels = {
  easy: 12,
  normal: 16,
  hard: 24,
}

export const deckProps = {
  difficulty: cardsCountByDifficulty.easy,
}

const suitCount = 4
const equalCardsCount = 2
const maxRank = 14
const minRank = 6

export function createDeck(difficulty: number) {
  if (difficulty % 2 !== 0) {
    throw new Error('нечетное количество карт, игра не получится')
  }

  const deck: string[][] = []
  for (let i = 1; i <= difficulty / equalCardsCount; i++) {
    const randomizeCard = () => {
      const rank = Math.ceil(
        Math.random() * (maxRank - minRank) + minRank
      ).toString()
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

// module.exports = { createDeck }
