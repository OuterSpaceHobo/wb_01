// Задача о коллекции функций: у вас есть массив функций, напишите код, 
// который вызовет каждую функцию в этом массиве и выведет их порядковый номер. 
// Однако, вызов каждой функции должен происходить только после вызова предыдущей функции.
// Другими словами, нужно выполнить следующие шаги:
// Вызвать первую функцию из массива.
// После завершения работы первой функции вызвать вторую функцию.
// После завершения работы второй функции вызвать третью функцию.
// И так далее, пока все функции в массиве не будут вызваны по порядку.


const functions = [
    () => {
      console.log('Вызвана функция 1');
      // Дополнительный код первой функции
    },
    () => {
      console.log('Вызвана функция 2');
      // Дополнительный код второй функции
    },
    () => {
      console.log('Вызвана функция 3');
      // Дополнительный код третьей функции
    },
    // Добавьте остальные функции в массив
  ];
  
    function callFunctionsSequentially() {
      for (const func of functions) {
        func();
      }
  }
  
  // Вызываем функцию для последовательного вызова функций из массива
  callFunctionsSequentially();