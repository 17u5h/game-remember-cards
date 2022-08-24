import renderFinishScreen from './renderFinishScreen'

let firstClickedCardElement: HTMLElement
let secondClickedCardElement: HTMLElement
let firstCardFlag: boolean = false
let secondCardFlag: boolean = false
const firstClickedCard: string[] = []
let countToWin: number = 0

export function gameEngine(event: Event) {
  const target = event.target as HTMLElement
  const cards = document.querySelectorAll('.play-field__card')

  if (target === null)
    throw new Error('нет игрового поля, по которому нужно кликать')
  if (target.classList.contains('play-field')) return
  if (target.classList.contains('prevent-click')) return

  if (firstClickedCard.length !== 0) {
    const secondSuit = target.dataset.suit
    const secondRank = target.dataset.rank

    target.classList.add(`play-field__card_flipped-${secondSuit}-${secondRank}`)
    firstClickedCardElement.classList.remove('prevent-click')
    secondCardFlag = true

    if (
      firstClickedCard[0] === secondSuit &&
      firstClickedCard[1] === secondRank
    ) {
      if (secondClickedCardElement === null)
        throw new Error('не удалось взять повторно уже открытую карту')
      secondClickedCardElement = document.querySelector(
        `.play-field__card_flipped-${firstClickedCardElement.dataset.suit}-${firstClickedCardElement.dataset.rank}`
      ) as HTMLElement
      firstClickedCardElement.classList.add('prevent-click')
      secondClickedCardElement.classList.add('prevent-click')

      firstClickedCard.splice(0)
      firstCardFlag = false
      secondCardFlag = false

      countToWin += 2
      if (countToWin === cards.length) renderFinishScreen()
    } else {
      firstClickedCard.splice(0)
      secondClickedCardElement = target
    }
  } else {
    if (secondCardFlag) {
      secondClickedCardElement.classList.remove(
        `play-field__card_flipped-${secondClickedCardElement.dataset.suit}-${secondClickedCardElement.dataset.rank}`
      )
    }
    if (firstCardFlag) {
      firstClickedCardElement.classList.remove(
        `play-field__card_flipped-${firstClickedCardElement.dataset.suit}-${firstClickedCardElement.dataset.rank}`
      )
    }
    const firstSuit = target.dataset.suit
    const firstRank = target.dataset.rank

    if (firstSuit === undefined || firstRank === undefined)
      throw new Error('не получилось получить данные первой кликнутой карты')
    firstClickedCard.push(firstSuit, firstRank)
    target.classList.add(`play-field__card_flipped-${firstSuit}-${firstRank}`)
    target.classList.add('prevent-click')
    firstClickedCardElement = target
    firstCardFlag = true
  }
}

export let timerInterval: NodeJS.Timer

export function startTimer(timerField: HTMLElement) {
  let seconds = 0
  let minutes = 0
  timerInterval = setInterval(() => {
    if (seconds > 59) {
      minutes++
      seconds = 0
      timerField.textContent = minutes.toString() + '.' + seconds.toString()
    }
    if (seconds >= 10) {
      timerField.textContent = minutes.toString() + '.' + seconds.toString()
      seconds++
    }
    if (seconds < 10) {
      timerField.textContent = minutes.toString() + '.0' + seconds.toString()
      seconds++
    }
  }, 1000)
}
