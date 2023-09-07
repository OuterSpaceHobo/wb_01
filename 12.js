// Задача на работу с объектами: создайте объект, представляющий собой книгу.
// Объект должен иметь свойства, такие как: название книги, автор и год издания. 
// Напишите методы для получения и изменения значений свойств книги.

const book = {
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    year: 2008,
  
    getTitle() {
      return this.title;
    },
  
    getAuthor() {
      return this.author;
    },
  
    getYear() {
      return this.year;
    },
  
    setTitle(newTitle) {
      this.title = newTitle;
    },
  
    setAuthor(newAuthor) {
      this.author = newAuthor;
    },
  
    setYear(newYear) {
      this.year = newYear;
    }
  };
  
  // Пример использования методов:
  console.log(book.getTitle()); // Выведет: "JavaScript: The Good Parts"
  console.log(book.getAuthor()); // Выведет: "Douglas Crockford"
  console.log(book.getYear()); // Выведет: 2008
  
  book.setTitle('JavaScript: The Definitive Guide');
  book.setAuthor('David Flanagan');
  book.setYear(2020);
  
  console.log(book.getTitle()); // Выведет: "JavaScript: The Definitive Guide"
  console.log(book.getAuthor()); // Выведет: "David Flanagan"
  console.log(book.getYear()); // Выведет: 2020