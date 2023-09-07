// Задача на асинхронность: напишите асинхронную функцию, которая использует ключевое слово await 
// для ожидания выполнения других асинхронных операций, и возвращает результат выполнения.

async function asyncFunction() {
    try {
      const result1 = await asyncOperation1(); // Пример ожидаемой асинхронной функции
      const result2 = await asyncOperation2(result1); // Пример ожидаемой асинхронной функции
      const result3 = await asyncOperation3(result2); // Пример ожидаемой асинхронной функции
      return result3;
    } catch (error) {
      console.error('An error occurred:', error);
      throw error;
    }
  }