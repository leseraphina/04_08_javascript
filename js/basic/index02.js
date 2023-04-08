// 구조분해
const color = ['red','blue','green'];
const [a,b,c,d='data'] = color;
console.log(a,b);
console.log(d);

// 제외하고 축출하기
const word = ['moon','flower','cat','dog'];
const [,no01,,no02] = word;
console.log(no01)

