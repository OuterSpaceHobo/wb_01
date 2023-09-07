// Реализовать функцию конвертации JSON в строку	

function serializeToJSON(obj) {
  // Проверяем тип объекта
  if (typeof obj === 'string') {
    // Если объект является строкой, экранируем кавычки и возвращаем в кавычках
    return '"' + obj.replace(/"/g, '\\"') + '"';
  } else if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    // Если объект является числом, булевым значением или null, преобразуем в строку и возвращаем
    return String(obj);
  } else if (Array.isArray(obj)) {
    // Если объект является массивом, сериализуем каждый элемент массива и объединяем их в строку
    let serializedArray = obj.map(item => serializeToJSON(item));
    return '[' + serializedArray.join(',') + ']';
  } else if (typeof obj === 'object') {
    // Если объект является объектом, сериализуем каждое свойство объекта и объединяем их в строку
    let serializedObject = [];

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        // Сериализуем ключ и значение каждого свойства объекта
        let serializedKey = '"' + key + '"';
        let serializedValue = serializeToJSON(obj[key]);
        serializedObject.push(serializedKey + ':' + serializedValue);
      }
    }

    return '{' + serializedObject.join(',') + '}';
  } else {
    // Если объект имеет неизвестный тип, выбрасываем ошибку
    throw new Error('Unsupported data type: ' + typeof obj);
  }
}

// Пример использования:
const obj = {
  name: 'John',
  age: 30,
  city: 'New York',
  hobbies: ['reading', 'painting'],
  isStudent: true,
  null: null,
  address: {
    street: '123 Main St',
    zipCode: 12345
  }
};

console.log(serializeToJSON(obj))