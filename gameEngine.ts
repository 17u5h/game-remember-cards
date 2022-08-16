function shuffleDeckAndPushCard() {
    const randomIndex = Math.floor(Math.random() * deck.length)
    const randomCard = deck[randomIndex]
    deck.splice(randomIndex, 1)
    return randomCard
}

function gameEngine(event: Event) {

    const target = event.target as HTMLElement

    if (target === null) throw new Error('нет игрового поля, по которому нужно кликать')
    if (target.classList.contains('play-field')) return
    const cards = document.querySelectorAll('.play-field__card')

    if (firstClickedCard.length !== 0) {
        const secondSuit = target.dataset.suit
        const secondRank = target.dataset.rank

        target.classList.add(`play-field__card_flipped-${secondSuit}-${secondRank}`)


        if (firstClickedCard[0] === secondSuit && firstClickedCard[1] === secondRank) {

            firstClickedCard.splice(0)
            firstClickedCardElement.remove()
            secondClickedCardElement.remove()
            countToWin += 2
            if (countToWin === cards.length) renderFinishScreen()
        } else {
            firstClickedCard.splice(0)
            secondClickedCardElement = target
        }
    } else {
        if (secondClickedCardElement) {
            secondClickedCardElement.classList.remove(`play-field__card_flipped-${secondClickedCardElement.dataset.suit}-${secondClickedCardElement.dataset.rank}`)
        }
        if (firstClickedCardElement) {
            firstClickedCardElement.classList.remove(`play-field__card_flipped-${firstClickedCardElement.dataset.suit}-${firstClickedCardElement.dataset.rank}`)
        }
        const firstSuit = target.dataset.suit
        const firstRank = target.dataset.rank
        if (firstSuit === undefined || firstRank === undefined) throw new Error('не получилось получить данные первой кликнутой карты')
        firstClickedCard.push(firstSuit, firstRank)
        target.classList.add(`play-field__card_flipped-${firstSuit}-${firstRank}`)
        firstClickedCardElement = target

    }
}

function startTimer(timerField: HTMLElement) {
    timerInterval = setInterval(() => {
        if (seconds > 59){
            minutes++
            seconds = 0
            timerField.textContent = minutes.toString() + '.' + seconds.toString()
        }
        if (seconds >= 10){
            timerField.textContent = minutes.toString() + '.' + seconds.toString()
            seconds++
        }
        if (seconds < 10) {
            timerField.textContent = minutes.toString() + '.0' + seconds.toString()
            seconds++
        }
    }, 1000)

}
