// Задача: Создать и добавить стиль для элемента: Напишите функцию, которая создает новый элемент, 
// добавляет его в DOM и устанавливает для него стиль с помощью CSS.

function createAndStyleElement(tagName, style) {
    // Создание нового элемента
    const element = document.createElement(tagName);
  
    // Установка стиля с помощью CSS
    Object.assign(element.style, style);
  
    // Добавление элемента в DOM
    document.body.appendChild(element);
  
    // Возвращение созданного элемента
    return element;
  }
  
  // Пример использования функции
  const style = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px',
    borderRadius: '5px'
  };
  
  const newElement = createAndStyleElement('div', style);
  newElement.textContent = 'Пример элемента с установленным стилем';