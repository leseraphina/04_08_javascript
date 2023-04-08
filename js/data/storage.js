localStorage.setItem('book','javascript');
const color = {
    title:'red',
    sample:'apple',
    no:['no01','no02']
}

localStorage.setItem('color',color);
const str = JSON.stringify(color);
console.log(str);
localStorage.setItem('color',str);
console.log(localStorage.getItem('color'));

const num01 = localStorage.getItem('color');
const str2 = JSON.parse(num01);
console.log(str2);
console.log(str2.title);
console.log(str2.no[0]);

localStorage.setItem('it','html');
localStorage.setItem('it2','css2');
localStorage.setItem('it3','jquery');

localStorage.removeItem('it');
localStorage.clear();

localStorage.setItem('word','flower')