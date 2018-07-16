const express = require('express')
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.render('index.hbs', {
        pageTitle: 'Home Page',
        currentYear: new Date().getFullYear(),
        welcomeMessage: 'Sunt nostrud enim in enim duis nostrud incididunt consectetur aliquip eu do. Sint elit ea eiusmod laboris mollit consectetur culpa nisi. Nostrud quis ullamco exercitation consectetur ipsum laboris fugiat cillum adipisicing culpa culpa.'
    });
})

app.get('/about', (req,res)=>{
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
})

app.listen(3000, () => {
    console.log('Server is up on port 3000...');
});
