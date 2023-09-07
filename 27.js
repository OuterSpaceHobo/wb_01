// Задача: Добавить анимацию для элемента: Напишите функцию, которая добавляет анимацию для элемента 
// на веб-странице, например, плавное изменение его положения или размера.

function animateElement(element, animation) {
    // Добавление класса анимации к элементу
    element.classList.add(animation);
  
    // Удаление класса анимации после окончания анимации
    element.addEventListener('animated', function() {
      element.classList.remove(animation);
    });
  }
  
  // Пример использования функции
  const element = document.getElementById('myElement');
  const animationClass = 'slide-in';
  
  animateElement(element, animationClass);