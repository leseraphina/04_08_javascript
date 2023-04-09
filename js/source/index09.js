const str = {
    userId : 3,
    title:'수정 title'
}

fetch('https://jsonplaceholder.typicode.com/albums/20',{
    method:'PUT',
    body:JSON.stringify(str)
})
.then(main => main.text())
.then(result => console.log(result))