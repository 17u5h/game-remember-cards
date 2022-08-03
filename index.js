const template = templateEngine(
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
					cls: 'start-screen__levels',
					content: [{
						tag: 'div',
						cls: 'start-screen__level',
						content: '1'
					}, {
						tag: 'div',
						cls: 'start-screen__level',
						content: '2'
					}, {
						tag: 'div',
						cls: 'start-screen__level',
						content: '3'
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
document.body.appendChild(template)