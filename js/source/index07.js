const todo = {
    userId : 2,
    title: 'title101',
    body:'sample01 101'
}

fetch('https://jsonplaceholder.typicode.com/posts',{
   method : 'POST' ,
   body:JSON.stringify(todo)
})
.then(response => response.text())
.then(result => console.log(result))