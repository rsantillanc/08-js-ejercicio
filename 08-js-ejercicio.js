const alwaysTrue = () => true;
const timeout = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Hola soy una promesa"), 5000);
});

function* generateParIndex(size) {
  for (let i=2; i <= size; i++) {
    if (i % 2 == 0) yield i
  }
}

console.log(alwaysTrue());
timeout.then((value) => {
  console.log(value);
});
const generator = generateParIndex(10)
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());