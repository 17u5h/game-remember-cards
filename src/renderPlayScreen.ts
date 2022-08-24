import templateEngine from './lib/templateEngine'
import renderStartScreen from './renderStartScreen'
import { gameEngine, startTimer, timerInterval } from './gameEngine'
import { createDeck, deckProps } from './initSetAndSupport'

export default function renderPlayScreen(event: Event) {
  event.preventDefault()
  document.body.textContent = ''

  const cards: object[] = []
  const deck: string[][] = createDeck(deckProps.difficulty)

  function shuffleDeckAndPushCard(): string[] {
    const randomIndex = Math.floor(Math.random() * deck.length)
    const randomCard = deck[randomIndex]
    deck.splice(randomIndex, 1)
    return randomCard
  }

  for (let i = 0; i < deckProps.difficulty; i++) {
    const randomCard: string[] = shuffleDeckAndPushCard()
    cards.push({
      tag: 'img',
      cls: [
        'play-field__card',
        `play-field__card_flipped-${randomCard[0]}-${randomCard[1]}`,
      ],
      attrs: {
        'data-suit': randomCard[0],
        'data-rank': randomCard[1],
      },
    })
  }

  const templatePlayScreen = templateEngine({
    tag: 'div',
    cls: 'container',
    content: [
      {
        tag: 'div',
        cls: 'header',
        content: [
          {
            tag: 'div',
            cls: 'header__clock',
            content: [
              {
                tag: 'div',
                cls: 'header__min-sec',
                content: [
                  {
                    tag: 'div',
                    cls: 'header__min',
                    content: 'min',
                  },
                  {
                    tag: 'div',
                    cls: 'header__sec',
                    content: 'sec',
                  },
                ],
              },
              {
                tag: 'div',
                cls: 'header__timer',
                content: `0.00`,
              },
            ],
          },
          {
            tag: 'button',
            cls: 'button',
            content: 'Начать заново',
          },
        ],
      },
      {
        tag: 'div',
        cls: 'play-field',
        content: cards,
      },
    ],
  })

  document.body.appendChild(templatePlayScreen)
  const startAgainButton = document.querySelector('.button')
  if (startAgainButton === null)
    throw new Error('кнопка "начать заново" не создалась')
  startAgainButton.addEventListener('click', renderStartScreen)

  const hideCards = (card: Element) => {
    const timeToHideCards = 5000
    setTimeout(() => {
      card.removeAttribute('class')
      card.classList.add('play-field__card_not-flipped')
      card.classList.add('play-field__card')

      const timerField = document.querySelector('.header__timer') as HTMLElement
      clearInterval(timerInterval)
      startTimer(timerField)
    }, timeToHideCards)
  }

  const cardElements = document.querySelectorAll('.play-field__card')
  cardElements.forEach(hideCards)

  const clickedCard = document.querySelector('.play-field')
  if (clickedCard === null)
    throw new Error('не получается выбрать карту по которой кликнули')
  clickedCard.addEventListener('click', gameEngine)
}
