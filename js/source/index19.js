async function play(){
// 실행
try{
  alert('시작입니다.')
  console.log('welcome')
  const response = await fetch('https://jsonplaceholder.typicode.com/todosasd/1');
  return responsae;
  // const result = await response.text();
  // console.log(result)
}
// error
catch(error){
 alert('에러입니다.')
}
// 마감
finally{
  console.log('작업이 끝났습니다.');
}
}

play();