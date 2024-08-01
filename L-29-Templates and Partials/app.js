const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

const hbs = require('hbs');

// middleware for helpers and partials
hbs.registerPartials(path.join(__dirname + '/views/partials'));

app.use(express.urlencoded({ extended: true }));

//  hbs middleware
app.set('view engine', 'hbs');

let todos = ["Cricket", "Dance", "Sing", "Hockey"];

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'index.html'));

    // rendering the views folder - index.hbs file
    res.render('index',{
        firstName : "Gourav ",
        lastName : "Kumar ",
        // sending todos array
        todos
    });

})

app.post('/todos', async (req, res) => {
    try {
        const { newTask } = req.body;
        todos.push(newTask);
        res.redirect('/');
    }
    catch (err) {
        res.send(err);
    }
})

app.get('/deletetask', async (req, res) => {
    try {
        const { name } = req.query;
        todos = todos.filter(t => t!==name);
        res.redirect('/');
    }
    catch (err) {
        res.send(err);
    }
})

app.get('/increase', (req, res) => {
    try {
        const { name } = req.query;
        let indx = todos.indexOf(name);
        if (indx > 0)
            [todos[indx - 1], todos[indx]] = [todos[indx], todos[indx - 1]];
        res.redirect('/');
    }
    catch (err) {
        res.send(err);
    }
})

app.get('/decrease', (req, res) => {
    try {
        const { name } = req.query;
        let indx = todos.indexOf(name);
        if (indx < todos.length-1)
            [todos[indx + 1], todos[indx]] = [todos[indx], todos[indx + 1]];
        res.redirect('/');
    }
    catch (err) {
        res.send(err);
    }
})


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});