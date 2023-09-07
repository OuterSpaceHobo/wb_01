// Реализовать функцию подсчета объема памяти занимаемого данными в LocalStorage для предыдущей задачи. 
// При изменении данных в localStorage в консоль должен выводиться объем занятой памяти / максимальный размер хранилища.

// Рассчитываем оставшееся место в хранилище
async function calculateStorageSize() {
    let totaStoragelSize = 0;
    let lsTotal = 0, xLen, x;
      // Итерируемся по свойствам localStorage
      for (x in localStorage) {
      if (!localStorage.hasOwnProperty(x)) continue;
          // Вычисляем размер каждого свойства хранилища
          xLen = (localStorage[x].length + x.length) * 2;
          lsTotal += xLen;
      }
    // Преобразуем размер хранилища в килобайты
    totaStoragelSize = (lsTotal / 1024).toFixed(2)

    const maxStorageSize = (10 * 1024).toFixed(2); // Принимаем максимальный размер хранилища в 10 МБ
    console.log(`Занятое место: ${totaStoragelSize} kb / ${maxStorageSize} kb`);
}