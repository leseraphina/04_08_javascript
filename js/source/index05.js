fetch('https://jsonplaceholder.typicode.com/photos')
.then(response => response.text())
.then(resutl => {
    const level = JSON.parse(resutl);
    console.log(level)
    const basic = level.filter(item => item.albumId === 1);
    for(let i of basic){
        document.write(
            `
            <figure>
            <img src="${i.thumbnailUrl}" alt="${i.title}">
            <figcaption>${i.title}</figcaption>
            </figure>
            `
        )
    }
})
// 31 - 41