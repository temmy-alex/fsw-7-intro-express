var express = require('express');
var app = express();

// Set template engine yang akan digunakan
app.set('view engine', 'ejs');
// Buat folder views

// Response string
// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

// Response html
app.get('/', (req, res) => {
    res.send('<h1>Halo</h1>');
})

// Response json
// app.get('/', (req, res) => {
//     res.json({"name":"Andi"});
// })

app.get('/pages', (req, res) => {
    res.send('<h1>Pages</h1>');
})

// Routing Dynamic
app.get('/id/:nama', (req, res) => {
    res.send('Request ID ' + req.params.nama);
})

app.get('/product/:slug', (req, res) => {
    res.send('Product ' + req.params.slug);
})

// call html file
app.get('/greeting', (req, res) => {
    res.sendFile(__dirname + '/pages.html');
})

app.get('/about', (req, res) => {
    res.render('about')
})

// With params
app.get('/user/:nama', (req, res) => {
    res.render('person', {orang: req.params.nama});
})

app.get('/greet/:name', (req, res) => {
    const name = req.params.name
    res.render('greet', {name})
})

// Query string
app.get('/show', (req, res) => {
    const text = req.query.name || 'Void'
    res.render('show', {text})
})

// Passing object to view
app.get('/people', (req, res) => {
    var people = {nama: 'Test', usia: 20}
    // listpeople adalah nama file di folder views
    // sdm adalah key yang dilempar ke file view listpeople
    // people adalah value object yang berasal dari variable people 
    res.render('listpeople', {sdm: people});
})

// Passing array to view
app.get('/list-student', (req, res) => {
    var students = ['Fateh', 'Casey', 'Ilham'];
    var text = 'Text with variable'
    res.render('liststudent', {text, murid: students});
})

// http://localhost:3000/home?notif=sukses
// Jika terdapat query string notif dengan nilai sukses maka akan muncul alert bootstrap success
app.get('/home', (req, res) => {
    const notif = req.query.notif
    res.render('home', {notif_success: notif});
})

app.listen(3000);