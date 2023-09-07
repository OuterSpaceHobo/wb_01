// Посчитайте сколько раз можно вызвать функцию document.write() внутри document.write().
// Объясните результат.

// Если верить статье https://habr.com/ru/articles/305366/ то 20-21 раз, хотя с воспроизведением вопрос тк.
let count = 0
function writeInside() {
  try {
    count++
    document.write(`<p>${count}</p>`)
    writeInside()
  } catch (ex) {
    console.log(ex)
  }
}
document.write(`Origin ${ writeInside() }`); // спокойно вызывает до лимита коллстека, равно как и 

document.write(`<script>writeInside()</` + `script`);

// да и вызов напрямую тоже работает больше заявленных 20-21 раз -
document.write(`<script> 
document.write('ello1')
document.write('ello2')
document.write('ello3')
etc...
</` + `script`);

