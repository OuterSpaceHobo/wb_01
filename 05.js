// Разработайте функцию преобразования JSON в связный список. 
// На входе функция должна получать JSON, содержащий список объектов, на выходе объект, 
// представляющий из себя односвязный список.

function jsonToLinkedList(json) {
  if (typeof json !== 'string') {
    throw new Error('Входной аргумент должен быть строкой JSON');
  }

  const data = JSON.parse(json);

  if (!Array.isArray(data)) {
    throw new Error('Входной JSON должен быть массивом объектов');
  }

  let head = null; // Голова связного списка
  let current = null; // Текущий элемент связного списка

  for (let i = 0; i < data.length; i++) {
    const newNode = {
      value: JSON.parse(JSON.stringify(data[i], replacer)), // Клонирование объекта и преобразование функций в строки
      next: null // Ссылка на следующий элемент
    };

    if (i === 0) {
      head = newNode; // Первый элемент становится головой
      current = newNode; // Первый элемент становится текущим
    } else {
      current.next = newNode; // Связываем текущий элемент со следующим
      current = newNode; // Обновляем текущий элемент
    }
  }

  return head; // Возвращаем голову связного списка
}

function replacer(key, value) {
  if (typeof value === 'function') {
    return value.toString(); // Преобразование функции в строку
  }
  return value;
}

const fs = require('fs');
const jsonString = fs.readFileSync('./testData/ex2.json', { encoding: 'utf8', flag: 'r' });
console.log(jsonToLinkedList(jsonString)) // Выводит обобщенную запись
