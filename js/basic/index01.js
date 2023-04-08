//  객체 인덱싱 기법 name
const all = {
    type:'it',
    title:'javascript',
    'all-time':300
}

console.log(all.type);
console.log(all['title']);
console.log(all['all-time']);

// const num = {
//     a1:10,
//     a2:20,
//     a3:30
// }

const {a1,a2,a3} = {
    a1:10,
    a2:20,
    a3:30
}
// console.log(num.a1)
console.log(a1)

const book = {
    title:'javascript',
    type:'it'
}
const {title,type,level= 0} = book;
console.log(type);
console.log(level);

// 키의 변경
const str = type;
console.log(str);

// 속성을 변경

const graphic = {
    no:'paint',
    title2:'photoshop'
}
const {no:subtitle,title2}  = graphic ;
console.log(subtitle);

