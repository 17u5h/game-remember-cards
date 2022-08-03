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

	function setDifficulty(event) {
		const target = event.target

		if (!target.classList.contains('start-screen__difficulty')) return

		for (let i = 0; i < difficultyButtons.children.length; i++) {
			difficultyButtons.children[i].classList.remove('start-screen__difficulty_chosen')
		}

		target.classList.add('start-screen__difficulty_chosen')

		difficulty = countCards[target.dataset.difficulty]

		throw new Error('не найдена сложность игры')
	}

	const difficultyButtons = document.querySelector('.start-screen__difficulties')
	const startButton = document.querySelector('.button')
	difficultyButtons.addEventListener('click', setDifficulty)
	startButton.addEventListener('click', renderPlayScreen)
}
