// Задача о сортировке объектов: у вас есть массив объектов вида { name: 'John', age: 25 }. 
// Напишите код, который сортирует этот массив по возрастанию возраста,
// а при равных возрастах сортирует по алфавиту по полю name.

const users = [
    { name: 'Alex', age: 25 },
    { name: 'Bill', age: 25 },
    { name: 'Jill', age: 20 },
    { name: 'Jonathan', age: 21 },
    { name: 'Max', age: 22 },
    { name: 'Oliver', age: 23 },
    { name: 'Barack', age: 35 },
    { name: 'Bill', age: 45 },
]

users.sort((a, b) => {
  // Сравниваем возрасты объектов a и b
  if (a.age === b.age) {
    // Если возрасты равны, сравниваем их имена по алфавиту
    return a.name.localeCompare(b.name);
  }
  // Если возрасты не равны, сортируем по возрастанию возраста
  return a.age - b.age;
});

console.log('users', users)
