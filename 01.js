// Задача о палиндроме: напишите функцию, которая проверяет, является ли заданная строка палиндромом. 
// Палиндром — это строка, которая читается одинаково в обоих направлениях (например, «аргентина манит негра»).

// Вариант 1
function palindromeStr(str) {
    // Убираем регистр, нежелательные символы и пробелы
    var re = /[\W_]/g; 
    var lowRegStr = str.toLowerCase().replace(re, '');
    // Разбиваем строку в посимвольный массив, разворачиваем и объединаем
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    // Проверяем, равны ли они
    return console.log('palindromeStr', reverseStr === lowRegStr)
  }
palindromeStr("аргентина манит негра");

// Вариант 2
function palindromeLoop(str) {
    // Убираем регистр, нежелательные символы и пробелы
    var re = /[^A-Za-z0-9]/g; 
    str = str.toLowerCase().replace(re, '');
    // Создаем цикл
    var len = str.length; 
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) { //цикл продолжается пока символы совпадают
          return false; 
      }
 }
 return console.log('palindromeLoop', true);
}
palindromeLoop("аргентина манит негра");

// Вариант 3
function isPalindrome(str) {
  // Убираем регистр, нежелательные символы и пробелы
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Используем два указателя для сравнения символов с обоих концов строки
  let left = 0;
  let right = cleanedStr.length - 1;
  
  // Пока указатели не пересекутся
  while (left < right) {
    // Если символы не совпадают, строка не является палиндромом
    if (cleanedStr[left] !== cleanedStr[right]) {
      return false;
    }
    
    // Перемещаем указатели к центру строки
    left++;
    right--;
  }
  
  // Если все символы совпадают, строка является палиндромом
  return true;
}

// Пример использования:
console.log('isPalindrome', isPalindrome("А роза упала на лапу Азора")); // Выведет: true
console.log('isPalindrome', isPalindrome("Аргентина манит негра")); // Выведет: true
console.log('isPalindrome', isPalindrome("hello")); // Выведет: false