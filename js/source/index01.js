
// const Book = class{}
class Book{
    constructor(type,title){
        this.type = type;
        this.title = title;
    }
    action(){
        console.log(
            `${this.type} : ${this.title}`
        )
    }
}
const it = [
    new Book('graphic','photoshop'),
    new Book('it','HTML'),
    new Book('office','excel'),
]

for(let num in it){
    it[num].action();
}