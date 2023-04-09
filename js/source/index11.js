console.log('start');
console.log('start1');

fetch('https://jsonplaceholder.typicode.com/albums/3')
.then(item => item.text())
.then(main => console.log(main))
.then(() => console.log('start7'));

console.log('start2');
console.log('start3');
console.log('start4');
console.log('start5');
console.log('start6');
