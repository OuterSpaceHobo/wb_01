// Реализовать функцию конвертации строки в JSON со всеми необходимыми проверками и валидациями.

function parseJSON(jsonString) {
    let index = 0;
    let currentChar = '';
  
    function getNextChar() {
      // Получаем следующий символ из строки JSON
      currentChar = jsonString.charAt(index);
      index++;
    }
  
    function isWhiteSpace(char) {
        // Проверяем, является ли символ пробельным
        const whitespaceChars = ['\n', '\t', ' '];
        return whitespaceChars.includes(char)
    }
    function skipWhiteSpaces() {
        // Пропускаем все пробельные символы
        while (isWhiteSpace(currentChar)) {
            getNextChar()
        }
    }

    function parseValue() {
        skipWhiteSpaces() // Пропускаем пробелы
        // console.log('parseValue', index, currentChar);
        let val = null;
      if (currentChar === '{') {
        val = parseObject();
      } else if (currentChar === '[') {
        val = parseArray();
      } else if (currentChar === '"') {
        val = parseString();
      } else if (currentChar === 't' || currentChar === 'f') {
        val = parseBoolean();
      } else if (currentChar === 'n') {
        val = parseNull();
      } else {
        val = parseNumber();
      }
      // console.log('val', val);
      return val;
    }
  
    function parseObject() {
      // console.log('parsedObject', index, currentChar);
      let obj = {};
  
      getNextChar() // Пропускаем открывающую фигурную скобку
      skipWhiteSpaces() // Пропускаем пробелы
      // console.log('parsedObject после пробелов', index, currentChar);
        
        while ( true ) {
        skipWhiteSpaces() // Пропускаем пробелы
  
        let key = parseString();
        // console.log('key', key);
        skipWhiteSpaces() // Пропускаем пробелы
        // console.log('colon', currentChar);
        getNextChar() // Пропускаем двоеточие
        skipWhiteSpaces() // пропускаем пробелы
  
        let value = parseValue();
        // console.log('value', value);
  
        obj[key] = value;
  
        skipWhiteSpaces() // Пропускаем пробелы
        // console.log('comma or closing curly brace', currentChar);

        if (currentChar === ',') {
            getNextChar();
        } else if (currentChar === '}') {
            getNextChar();
            return obj
        } else {
            throw `invalid char in json obj ${currentChar} must be ',' or '}'`
        }
      }
    }
  
    function parseArray() {
      // console.log('parseArray', index, currentChar);
      let arr = [];
  
      getNextChar() // Пропускаем открывающую квадратную скобку
      skipWhiteSpaces() // Пропускаем пробелы

      while (true) {
        skipWhiteSpaces() // Пропускаем пробелы
        let value = parseValue();
        arr.push(value);
        skipWhiteSpaces() // Пропускаем пробелы

        // Если текущий символ - запятая, получаем следующий символ
        // Если текущий символ - закрывающая квадратная скобка, получаем следующий символ и возвращаем массив arr
        // Если текущий символ не является ни запятой, ни закрывающей квадратной скобкой, выбрасываем ошибку
        if (currentChar === ',') {
            getNextChar();
        } else if (currentChar === ']') {
            getNextChar();
            return arr;
        } else {
            throw `invalid char in json array ${currentChar} must be ',' or ']'`
        }
      }
    }
  
    function parseString() {
      // console.log('parseString', index, currentChar);
      let str = '';
  
      getNextChar() // Пропускаем открывающую двойную кавычку
  
      let prevChar = null;
      while (true) {
        // Если текущий символ - закрывающая двойная кавычка и предыдущий символ не является обратной косой чертой,
        // прерываем цикл
        if (currentChar === '"' && prevChar !== "\\") {
            break
        }
        str += currentChar; // TODO: Учесть добавлять текущий символ к строке с учетом экранирование
        prevChar = currentChar;
        getNextChar();
      }
  
      getNextChar() // Пропускаем закрывающую двойную кавычку
  
      return str;
    }
  
    function parseBoolean() {
      // console.log('parseBoolean', index, currentChar);
      let bool = '';

      // Пока текущий символ не является запятой, закрывающей фигурной скобкой или закрывающей квадратной скобкой,
      // добавляем текущий символ к строке bool и получаем следующий символ
      while (currentChar !== ',' && currentChar !== '}' && currentChar !== ']') {
        bool += currentChar;
        getNextChar();
      }
  
      return bool === 'true';
    }
  
    function parseNull() {
      // console.log('parseNull', index, currentChar);
      let ch1 = currentChar; getNextChar();
      let ch2 = currentChar; getNextChar();
      let ch3 = currentChar; getNextChar();
      let ch4 = currentChar; getNextChar();
      let nullValue = ch1 + ch2 + ch3 + ch4;

      // Если строка nullValue равна 'null', возвращаем null, иначе выбрасываем ошибку
      if ( nullValue === 'null') {
        return null
      } 
      throw `${nullValue} is not null`
    }
  
    function parseNumber() {
      // console.log('parseNumber', index, currentChar);
      let num = '';

      // Пока текущий символ не является запятой, закрывающей фигурной скобкой или закрывающей квадратной скобкой,
      // добавляем текущий символ к строке num, получаем следующий символ и пропускаем пробелы
      while (currentChar !== ',' && currentChar !== '}' && currentChar !== ']') {
        num += currentChar;
        getNextChar();
        skipWhiteSpaces()
      }
      // Преобразуем строку num в число с плавающей точкой и возвращаем его
      return parseFloat(num);
    }
  
    getNextChar(); // start parsing
  
    return parseValue();
  }
  

// Пример использования:
const fs = require('fs');
const jsonString = fs.readFileSync('./testData/ex1.json', { encoding: 'utf8', flag: 'r' });
const testString = '{"name": "John", "age": 30}';

const parsedObject = parseJSON(jsonString);
console.log('jsonString', jsonString);
console.log('object part', parsedObject.arr[1].str);

const parsedString = parseJSON(testString);
console.log('parsedString', parsedString);
console.log('string part', parsedString.age);


