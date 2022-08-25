Браузерная игра "угадай пары карт"

На начальном экране предлагается выбрать сложность игры, которые определяются в initSetAndSupport.ts, полями объекта cardsCountByDifficulty
После начала игры, карты показываются на 5 секунд, затем скрываются. Если вы не запомнили все пары карт, не беда. Можно тыкать наугад, пытаясь запомнить расположение.
Карты показываются максимум две штуки. Если вы не угадали, то эти две карты скрываются. Если угадали, то остаются открытыми. 
После того, как все карты угаданы, показывается финальный экран с временем, затраченным для выигрыша.

проект запускается: npm run start

сборка проекта вебпаком: npm run build. переменная окружения NODE_ENV стоит в позиции development

форматирование проекта prettier'ом: npm run format

запуск линтеров: npm run lint

к проекту прикручен husky, не дающий сделать commit, если в проекте что-то не так
