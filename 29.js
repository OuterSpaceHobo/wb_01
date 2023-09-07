// Задача: Взаимодействие с формами: Напишите функцию, которая получает данные из формы на веб-странице 
// и выполняет определенные действия с этими данными, например, отправляет их на сервер 
// или отображает всплывающее окно с результатами.

function handleFormSubmit(event) {
    event.preventDefault(); // Предотвращение отправки формы по умолчанию
  
    const form = event.target; // Получение элемента формы
    const formData = new FormData(form); // Создание объекта FormData для получения данных формы
  
    // Получение значения поля формы по его имени
    const name = formData.get('name');
    const email = formData.get('email');
  
    // Пример отображения результатов всплывающим окном
    const message = `Имя: ${name}\nEmail: ${email}`;
    alert(message);
  }
  
  // Пример использования функции
  const form = document.getElementById('myForm');
  form.addEventListener('submit', handleFormSubmit);