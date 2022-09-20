Учебный пет-проект.
Игра: угадай пары карт.

Сделана в полном соответствии с предоставленным дизайном (поэтому простите, что ничего не понятно и всё выглядит не очень)

На стартовом экране предоставляется выбор сложности, которая отражает количество карт, которые нужно будет угадать. По умолчанию easy: 12, normal: 16, hard: 24 карт, которые определяются в initSetAndSupport.ts, полями объекта cardsCountByDifficulty

После старта, открывается экран игры, в котором на определенное время показываются открытые карты, а затем скрываются. После этого нужно нажимать на одинаковые карты последовательно.
Если игрок угадал пару карт, то они остаются открытыми. Если игрок допустил ошибку, то предыдущая пара карт скроется, и можно пробовать снова. Игра заканчивается после того как игрок угадал все пары карт. В конце игры показывается время, за которое игрок нашел пару всем картам

проект запускается: npm run start

сборка проекта вебпаком: npm run build. переменная окружения NODE_ENV стоит в позиции development

форматирование проекта prettier'ом: npm run format

запуск линтеров: npm run lint

к проекту прикручен husky, не дающий сделать commit, пока не прошла проверка линтеров
