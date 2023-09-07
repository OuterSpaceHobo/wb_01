// Реализовать аналог библиотеки Math (можно назвать MathX) с базовым набором функций, используя замыкания:

function lib() {
    let math = {
        // вычисление N-го числа в ряду Фибоначчи
        fib: (n) => {
            // Используем формулу Бине
            const phi = (1 + Math.sqrt(5)) / 2; // Золотое сечение
            return Math.round(Math.pow(phi, n) / Math.sqrt(5));
            // При больших значениях N могут возникнуть проблемы с точностью чисел с плавающей точкой.
        },
        // вычисление всех чисел в ряду Фибоначчи до числа N
        fibN: (limit) => {
            if (limit <= 0) return [];
            if (limit === 1 ) return [0];
            const result = [0, 1];
            while (true) {
                const sum = result[result.length - 2] + result[result.length - 1];
                if (sum >= limit) break;
                result.push(sum);
            }
            return result;
        },
        // вычисление N-го просто числа
        prime: (num) => {
            const primes = [];
            let currentNumber = 2;
          
            // Генерируем простые числа до достижения N
            while (primes.length < num) {
              if (isPrime(currentNumber)) {
                primes.push(currentNumber);
              }
              currentNumber++;
            }
          
            return primes[primes.length - 1];
            // return isPrime(num)
        },
        // вычисление всех простых чисел до числа N
        primeN: (limit) => {
            const primes = []; // Массив для хранения простых чисел
            const isPrime = new Array(limit + 1).fill(true); // Массив для отметки простых и составных чисел
            
            // Применяем алгоритм "Решето Эратосфена"
            for (let p = 2; p * p <= limit; p++) {
              if (isPrime[p]) {
                // Если число p является простым, помечаем все его кратные числа как составные
                for (let i = p * p; i <= limit; i += p) {
                  isPrime[i] = false;
                }
              }
            }

            // Добавляем все простые числа в массив primes
            for (let p = 2; p <= limit; p++) {
              if (isPrime[p]) {
                primes.push(p);
              }
            }
          
            return primes;
        },
    }
    // Вспомогательная для prime
    function isPrime(number) {
        // Проверяем, является ли число простым boolean
        for (let i = 2, sqrt = Math.sqrt(number); i <= sqrt; i++) {
          if (number % i === 0) {
            return false;
          }
        }
        return number > 1;
      }
      
    return math;
  }
  
  const mathX = lib();
  console.log('fib', mathX.fib(7))
  console.log('fibN', mathX.fibN(5))
  console.log('prime', mathX.prime(10))
  console.log('primeN', mathX.primeN(30))
