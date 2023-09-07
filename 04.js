// Разработать функцию, изменяющую окончание слов в зависимости от падежа. Например:

const WordEnding = (function() {

    // Функция для определения правильного окончания
    function getWordEnding (number, arr) {
        if (number > 100) number = number % 100;
        if (number <= 20 && number >= 10) return arr[2];
        if (number > 20) number = number % 10;
        return number === 1 ? arr[0] : number > 1 && number < 5 ? arr[1] : arr[2]
    }

    // Метод для изменения окончания слова
    function changeEnding(number, arr) {
      const ending = getWordEnding(number, arr); // Получаем правильное окончани
      return `${number} ${ending}`;
    }

    // Возвращаем  метод модуля
    return {
        changeEnding
    };
  })();
  
console.log(WordEnding.changeEnding(112, ['сообщение', 'сообщения', 'сообщений'])); // Выведет: 112 сообщений
console.log(WordEnding.changeEnding(1, ['сообщение', 'сообщения', 'сообщений'])); // Выведет: 1 сообщение
console.log(WordEnding.changeEnding(1024, ['пользователь', 'пользователя', 'пользователей'])); // Выведет: 1024 пользователя
console.log(WordEnding.changeEnding(1026, ['пользователь', 'пользователя', 'пользователей'])); // Выведет: 1026 пользователей
console.log(WordEnding.changeEnding(121, ['пользователь', 'пользователя', 'пользователей'])); // Выведет: 121 пользователь


