const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'),() => {
    console.log('Server Running at http://127.0.0.1:',app.get('port'));
});

app.use(express.static('views'));

app.get('/', (req,res) => {
    res.send('Hello World');
});

//Index 화면
app.get('/index', (req,res) => {
    res.sendFile(__dirname + '/views/index.html');
});

//Index 화면
app.get('/index-jsp', (req,res) => {
    res.sendFile(__dirname + '/index.jsp');
});

//
app.get('/write', (req,res) =>{
    res.sendFile(__dirname + '/write.html');
})



