function renderPlayScreen(event) {
	event.preventDefault()
	document.body.textContent = ''

	const numberOfCards = []

	for (let i = 0; i < difficulty; i++) {
		numberOfCards.push({
			tag: 'img',
			cls: ['play-field__card', 'play-field__card_not-flipped'],
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
								content: `00.00` //${timer}
							}]
					}, {
						tag: 'button',
						cls: 'button',
						content: 'Начать заново'
					}]
			}, {
				tag: 'div',
				cls: 'play-field',
				content: numberOfCards
			}]
	})
	document.body.appendChild(templatePlayScreen)
	const startAgainButton = document.querySelector('.button')
	startAgainButton.addEventListener('click', renderStartScreen)
}
