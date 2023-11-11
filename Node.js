const express = require('express') //라이브러리 첨부해 주세요
const app = express() //express 이용해서 새로운 객체 만들어 주세요

app.listen(8080, function() {
    console.log('listening on 8080');
}) //listen(서버번호, 띄운 후 실행할 코드)

app.get('/pet', function(요청, 응답){
    응답.send('펫')
}) //pet으로 방문하면 안내문 띄우기

app.get('/beauty', function(요청, 응답){
    응답.send('뷰티')
}) //beauty로 방문하면 안내문 띄우기

app.get('/', function(요청, 응답){
    응답.sendFile(__dirname + '/index.html')
}) //beauty로 방문하면 안내문 띄우기