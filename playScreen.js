function renderPlayScreen(event) {
	event.preventDefault()
	document.body.textContent = ''

	const cards = []
	deck = createDeck(difficulty)

	for (let i = 0; i < difficulty; i++) {
		const randomCard = shuffleDeckAndPushCard()
		cards.push({
			tag: 'img',
			cls: ['play-field__card', `play-field__card_flipped-${randomCard[0]}-${randomCard[1]}`],
			attrs: {
				'data-suit': randomCard[0],
				'data-rank': randomCard[1]
			}
		})
	}

	const templatePlayScreen = templateEngine({
		tag: 'div',
		cls: 'container',
		content:
			[{
				tag: 'div',
				cls: 'header',
				content:
					[{
						tag: 'div',
						cls: 'header__clock',
						content:
							[{
								tag: 'div',
								cls: 'header__min-sec',
								content:
									[{
										tag: 'div',
										cls: 'header__min',
										content: 'min'
									}, {
										tag: 'div',
										cls: 'header__sec',
										content: 'sec'
									}]
							}, {
								tag: 'div',
								cls: 'header__timer',
								content: `0.00`
							}]
					}, {
						tag: 'button',
						cls: 'button',
						content: 'Начать заново'
					}]
			}, {
				tag: 'div',
				cls: 'play-field',
				content: cards
			}]
	})

	document.body.appendChild(templatePlayScreen)
	const startAgainButton = document.querySelector('.button')
	startAgainButton.addEventListener('click', renderStartScreen)

	const hideCards = card => {
		setTimeout(() => {
			card.removeAttribute('class')
			card.classList.add('play-field__card_not-flipped')
			card.classList.add('play-field__card')

			const timerField = document.querySelector('.header__timer')
			clearInterval(timerInterval)
			startTimer(timerField)
		}, timeToHideCards)
	}

	const cardElements = document.querySelectorAll('.play-field__card')
	cardElements.forEach(hideCards)

	const clickedCard = document.querySelector('.play-field')
	clickedCard.addEventListener('click', gameEngine)
}
