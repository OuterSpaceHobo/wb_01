// Анализатор сложности пароля: создайте функцию, которая оценивает сложность введенного пользователем пароля. 
// Необходимо анализировать длину пароля, использование различных символов, наличие чисел и букв в разных регистрах. 
// Выведите пользователю оценку сложности пароля и предложите улучшения, если пароль слишком слабый.

function analyzePasswordStrength(password) {
    // Проверка длины пароля
    const lengthScore = password.length >= 8 ? 2 : 1;
  
    // Проверка наличия различных символов
    const symbolScore = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(password) ? 2 : 1;
  
    // Проверка наличия цифр
    const digitScore = /\d/.test(password) ? 2 : 1;
  
    // Проверка наличия букв в разных регистрах
    const upperCaseScore = /[A-Z]/.test(password) ? 2 : 1;
    const lowerCaseScore = /[a-z]/.test(password) ? 2 : 1;
  
    // Общая оценка сложности пароля
    const totalScore = lengthScore + symbolScore + digitScore + upperCaseScore + lowerCaseScore;
  
    // Вывод оценки сложности пароля
    let strength = '';
    if (totalScore >= 9) {
      strength = 'Сильный';
    } else if (totalScore >= 7) {
        if (digitScore === 1 || symbolScore === 1) { // Если нет цифр или символов - оценка падает 
            strength = 'Слабый';
        } else {
            strength = 'Средний';
        }
    } else if (totalScore >= 5) {
      strength = 'Слабый';
    }
  
    // Предложение улучшений, если пароль слишком слабый
    let improvement = '';
    if (lengthScore === 1) {
      improvement += 'Увеличьте длину пароля до 8 символов или более. ';
    }
    if (symbolScore === 1) {
      improvement += 'Используйте специальные символы, такие как !@#$%^&*()_+-=[]{};\'\\|,.<>/?. ';
    }
    if (digitScore === 1) {
      improvement += 'Включите цифры в пароль. ';
    }
    if (upperCaseScore === 1) {
      improvement += 'Добавьте заглавные буквы в пароль. ';
    }
    if (lowerCaseScore === 1) {
      improvement += 'Добавьте строчные буквы в пароль. ';
    }
  
    // Возвращение оценки сложности и предложения улучшений
    return {
      strength,
      improvement
    };
  }
  
  // Пример использования функции
  const password = 'weass1/';
  const { strength, improvement } = analyzePasswordStrength(password);
  console.log('Оценка сложности пароля:', strength);
  console.log('Предложение улучшений:', improvement);