fetch('https://jsonplaceholder.typicode.com/posts/4')
.then(response => response.text())
.then(result => console.log(result));


// .then((response) =>{return response.text()})
// .then((result) =>{console.log(result)})