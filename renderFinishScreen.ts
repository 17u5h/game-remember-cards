function renderFinishScreen(){
clearInterval(timerInterval)
	const playedTimeElement = document.querySelector('.header__timer')
	if (playedTimeElement === null) throw new Error('что то произошло с таймером. там пусто')
	const playedTime = playedTimeElement.textContent

	const container = document.querySelector('.container') as HTMLElement
	if (container === null) throw new Error('куда-то пропал .container')
	container.style.opacity = '0.4'
	container.style.userSelect = 'none'

	const templateFinishScreen = templateEngine({
		tag: 'div',
		cls: 'finish-screen',
		content: {
			tag: 'div',
			cls: 'finish-screen__block',
			content: [{
				tag: 'div',
				cls: 'finish-screen__logo',
			},{
				tag: 'div',
				cls: 'finish-screen__sign',
				content: 'Вы выиграли!'
			},{
				tag: 'div',
				cls: 'finish-screen__time',
				content:[{
					tag: 'div',
					cls: 'finish-screen__time-sign',
					content: 'Затраченное время'
				},{
					tag: 'div',
					cls: 'finish-screen__time-timer',
					content: playedTime
				}]
			},{
				tag: 'button',
				cls: ['button','finish-screen-button'],
				content: 'Играть снова'
			}]
		}
	})
	document.body.appendChild(templateFinishScreen)

	const startAgainButton = document.querySelector('.finish-screen-button')
	if (startAgainButton === null) throw new Error('не получилось поймать кнопку "Начать игру заново"')
	startAgainButton.addEventListener('click', renderStartScreen)
}