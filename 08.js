// Задача о замыканиях: напишите функцию, которая будет принимать массив функций и возвращать новую функцию, 
// которая вызывает каждую функцию в этом массиве и возвращает массив результатов, 
// полученных после вызова каждой функции.


const functions = [
    () => 1,
    () => 2,
    () => 3
  ];

function One(arr) {
    return function() {
        let rez = []
        // Вызываем каждую функцию из массива и собираем результаты в новый массив
            for (i = 0; i < arr.length; i++) {
                rez.push(arr[i]())
            }
        return rez
    }
}

const start = One(functions)
const rez = start()

console.log(rez)
