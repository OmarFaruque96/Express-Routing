const express = require('express');
const app = express();
var morgan = require('morgan');

app.set('view engine', 'ejs');

app.listen(3000);
app.use(morgan('tiny'));

app.use(express.static('public'));

app.get('/', function (req, res) {

const posts = [
    {title: 'Man must explore, and this is exploration at its greatest', desc:'Problems look mighty small from 150 miles up', author:'Omar', date:' September 24, 2022'},
    {title: 'I believe every human has a finite number of heartbeats', desc:'Problems look mighty small from 150 miles up', author:'Tipu', date:' January 24, 2023'},
    {title: 'Science has not yet mastered prophecy', desc:'Problems look mighty small from 150 miles up', author:'Faruque', date:'December 24, 2022'},
];
  res.render('index', {title: 'Home', blogs: posts});
})
app.get('/about', function (req, res) {
    res.render('about', {title: 'About'});
})
app.get('/contact', function (req, res) {
    res.render('contact', {title: 'Contact'});
})
app.get('/single', function (req, res) {
    res.render('single', {title: 'Post View'});
}) 

app.use(function (req, res) {
    res.status(404).render('404');
})
