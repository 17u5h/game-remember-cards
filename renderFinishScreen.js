function renderFinishScreen(){
clearInterval(timerInterval)
	const playedTime = document.querySelector('.header__timer').textContent
	console.log(playedTime)

	const container = document.querySelector('.container')
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
	startAgainButton.addEventListener('click', renderStartScreen)
}