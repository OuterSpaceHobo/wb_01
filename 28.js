// Задача: Создать и добавить элемент с использованием шаблонов: Напишите функцию, 
// которая создает новый элемент с использованием шаблонов (например, с помощью тега <template>) 
// и добавляет его в DOM.

function createAndAddElementFromTemplate(templateId, containerId) {
    // Получение шаблона по его идентификатору
    const template = document.getElementById(templateId);
  
    // Клонирование содержимого шаблона
    const content = template.content.cloneNode(true);
  
    // Получение контейнера, куда будет добавлен элемент
    const container = document.getElementById(containerId);
  
    // Добавление склонированного содержимого в контейнер
    container.appendChild(content);
  }
  
  // Пример использования функции
  createAndAddElementFromTemplate('myTemplate', 'myContainer');