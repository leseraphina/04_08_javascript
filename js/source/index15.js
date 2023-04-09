// fetch('https://jsonplaceholder.typicodeasd.com/posts/1')
// .then(response => response.text(),(error)=>{console.log(error)})
// .then(resule =>{ 
//     console.log('welcome')
//     console.log(resule)
// })

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => response.text())
.then(result => {
    console.log('welcome');
    console.log(result)
})
.catch(() =>{console.log('error 발생되었습니다.')})
.finally(() => {console.log('작업이 마감되었습니다.')})
