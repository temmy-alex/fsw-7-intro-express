var express = require('express');
var app = express();
var bcrypt = require('bcrypt');
// Set template engine yang akan digunakan
app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));
app.use(express.urlencoded({ extended: true }));
// Buat folder views

const cpuInfo = require('./data/cpu.json');
const getCpu = cpuInfo.dataCPU;

var salt = bcrypt.genSaltSync(10);
var test = 'test';
console.log(bcrypt.hashSync(test, salt));
// Mas Temmy
app.get('/datacpu', (req, res) => {
    res.render('datacpu', {dataCPU: getCpu})
})

app.get('/datacpuCasey', (req, res) => {
    res.render('datacpuCasey', {dataCPU: getCpu})
})

app.get('/dataspeedIlham', (req, res) => {
    res.render('ilham', {dataCPU: getCpu})
})

app.get('/dataspeedFateh', (req, res) => {
    res.render('timesfateh', {dataCPU: getCpu})
})

// Reponse string
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

app.get('/form', (req, res) => {
    const notif = req.query.notif
    res.render('form', {notif});
})

app.post('/form', (req, res) => {
    res.json(email);
})

// http://localhost:3000/home?notif=sukses
// Jika terdapat query string notif dengan nilai sukses maka akan muncul alert bootstrap success
app.get('/home', (req, res) => {
    const notif = req.query.notif
    res.render('home', {notif_success: notif});
})



app.listen(3000);