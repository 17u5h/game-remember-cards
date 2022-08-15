renderStartScreen()

function renderStartScreen() {
	const templateInitialScreen = templateEngine(
		{
			tag: 'div',
			cls: 'start-screen',
			content: {
				tag: 'div',
				cls: 'start-screen__block',
				content: [{
					tag: 'div',
					cls: 'start-screen__title',
					content: 'Выбери сложность'
				},
					{
						tag: 'div',
						cls: 'start-screen__difficulties',
						content: [{
							tag: 'div',
							cls: 'start-screen__difficulty',
							content: '1',
							attrs: {'data-difficulty': 'easy'}
						}, {
							tag: 'div',
							cls: 'start-screen__difficulty',
							content: '2',
							attrs: {'data-difficulty': 'normal'}
						}, {
							tag: 'div',
							cls: 'start-screen__difficulty',
							content: '3',
							attrs: {'data-difficulty': 'hard'}
						}]
					},
					{
						tag: 'button',
						cls: 'button',
						content: 'Старт'
					}]
			}
		}
	)
	document.body.textContent = ''
	document.body.appendChild(templateInitialScreen)
	countToWin = 0
	seconds = 0
	minutes = 0


	function setDifficulty(event: Event) {

		const target = event.target as HTMLElement

		if (target === null) throw new Error('не задана сложность игры')

		if (!target.classList.contains('start-screen__difficulty')) return

		if (difficultyButtons === null) throw new Error('кнопки выбора сложности не создались')

		for (let i = 0; i < difficultyButtons.children.length; i++) {
			difficultyButtons.children[i].classList.remove('start-screen__difficulty_chosen')
		}

		target.classList.add('start-screen__difficulty_chosen')

		if (target.dataset.difficulty === undefined) throw new Error('что- то произошло с заданием сложности игры внутри HTML элемента')

		if (target.dataset.difficulty in cardsCountByDifficulty) {
			difficulty = cardsCountByDifficulty[target.dataset.difficulty]
			return
		}
		throw new Error('не найдена сложность игры')
	}

	const difficultyButtons = document.querySelector('.start-screen__difficulties')
	const startButton = document.querySelector('.button')

	if (difficultyButtons === null || startButton === null) throw new Error('кнопки выбора сложности или кнопка старта не создались')
	difficultyButtons.addEventListener('click', setDifficulty)
	startButton.addEventListener('click', renderPlayScreen)
}
