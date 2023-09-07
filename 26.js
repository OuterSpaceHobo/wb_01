// Задача: Рекурсивный обход дерева DOM:: Напишите функцию, которая рекурсивно обходит дерево DOM, 
// начиная с указанного элемента, и выполняет определенное действие с каждым узлом 
// (например, выводить информацию о теге в консоль).

function traverseDOM(node, action) {
    // Выполнение действия с текущим узлом
    action(node);
  
    // Рекурсивный обход дочерних узлов
    const children = node.childNodes;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.nodeType === Node.ELEMENT_NODE) {
        // Рекурсивный обход только для узлов-элементов
        traverseDOM(child, action);
      }
    }
  }
  
  // Пример использования функции
  const rootElement = document.body;
  
  function printTagInfo(node) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      console.log('Тег:', node.tagName);
    }
  }
  
  // Начало рекурсивного обхода дерева DOM
  traverseDOM(rootElement, printTagInfo);