// Подсчитать максимальный объем данных, который можно записать в localStorage вашего браузера.

const getStorageTotalSize = () => {
  const store = localStorage;
  const testkey = "$_test"; // Тестовый ключ является частью хранилища, должен иметь четное количество символов

  const test = (size) => {
    try {
      store.removeItem(testkey);
      store.setItem(testkey, new Array(size + 1).join('0'));
    } catch (ex) {
      return false;
    }
    return true;
  };

  const backup = {};
  for (let i = 0, n = store.length; i < n; ++i) {
    backup[store.key(i)] = store.getItem(store.key(i));
  }
  store.clear(); 

  let low = 0;
  let high = 1;
  const upperLimit = (1024 * 1024 * 1024) / 2; // Верхний предел размера хранилища 
  let upperTest = true;
  // Пробуем добавлять тестовый элемент, увеличиваем если удалось, пока не упадет
  while ((upperTest = test(high)) && high < upperLimit) {
    low = high;
    high *= 2;
  }
  // Если не удалось - определяем размер тестового элемента двоичным поиском
  if (!upperTest) {
    let half = ~~((high - low + 1) / 2); // ~~ - быстрый Math.floor()
    high -= half;
    while (half > 0) {
    // Значение half делится пополам и округляется вниз. 
    // Результат присваивается обратно half, а затем умножается на 1 или -1, 
    // в зависимости от результата тестирования размера хранилища (test(high)). 
    // Если тест проходит (true), то half умножается на 1 и прибавляется к high, увеличивая верхнюю границу. 
    // Если тест не проходит (false), то half умножается на -1 и вычитается из high, уменьшая верхнюю границу.
      high += (half = ~~(half / 2)) * (test(high) ? 1 : -1);
    }
    high = testkey.length + high;
  }

  if (high > upperLimit) {
    high = upperLimit;
  }

  store.removeItem(testkey);
  for (let p in backup) {
    store.setItem(p, backup[p]);
  }

  // *2 из-за хранения в формате Unicode
  return console.log(`Максимальный размер localStorage: ${high * 2} байт`);
};