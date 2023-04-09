fetch('https://jsonplaceholder.typicode.com/albums/3',{
    method:'DELETE'
})
.then(response => response.text())
.then(result => console.log(result))