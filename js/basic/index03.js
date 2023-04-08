const fruit = ['apple','oragne','banana'];
console.log(fruit);
console.log(...fruit)

//  함수, 배열 sort, shift,push

function obj(a,b,c){
    // return {a:a,b:b,c:c}
    return {a,b,c}
}

console.log(obj(fruit));
console.log(obj(fruit[0],fruit[1],fruit[2]));
console.log(obj(...fruit))
 
// const obj2 = function(){}
// const obj2 = (a,b,c) => {return {a:a,b:b,c:c}}
// const obj2 = (a,b,c) => {return {a,b,c}}
const obj2 = (a,b,c) => ({a,b,c});
console.log(obj2(...fruit));

const word = [1,2,3,4,5,6,7,8];
// const myWord = (a,b,c, ...d) =>{return {}}
const myWord = (a,b,c, ...d) =>({a,b,c,d});
console.log(myWord(...word))