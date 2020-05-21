const express = require('express');
const exprsBars = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded());

express.static(path.join(__dirname, 'views'));

app.engine('.hbs', exprsBars({
    defaultLayout: false,
    extname: '.hbs'
}))

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const baza = [
    {
        name: "Alesha",
        login: "some.login@gmail.com",
        pass: 12345
    },
    {
        name: "Sanya",
        login: "sanya.luchshiy@gmail.com",
        pass: 321321
    }
]

app.get('/baza', (req, res) => {
    res.render('baza',{baza})
})



app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/registration', (req, res) => {
    res.render('registration')
})

app.post('/reg',(req,res) => {
    baza.push(req.body);
    console.log(baza);
    res.end();
})

app.post('/log', (req, res) => {
    let isUser = baza.find(elem => elem.name===req.body.name && elem.pass===req.body.pass);
    if(isUser){
        res.write("welcome!");
    }
    else{
        res.write("zaregaysya");
    }

    res.end()
})




app.listen(5000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Listen 5000...');
    }
})