// 비동기통신 작동 순서

console.log('A:1');
async function fetchStr(){
  console.log('B:5');
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  console.log('C:9');
  const result = await response.text();
  console.log(result,':10')
  console.log('D:11');
}
console.log('E:2');
console.log('F:3');
console.log('G:4');
fetchStr();
console.log('H:6');
console.log('I:7');
console.log('J:8');