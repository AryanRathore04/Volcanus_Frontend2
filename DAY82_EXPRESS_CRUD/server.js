import express from 'express'

const app = express();


// CRUD => Create(POST), Read(GET), Update(PUT), Delete(DELETE)

const port = 1000;

// console.log('oo me toh superman salmaan ka fan jo bhi lele panga ');

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/superman', (req, res) => {
    // res.send("<h1>oo me toh superman salmaan ka fan jo bhi lele panga kr dunga ban </h1> ");

    // res.send({
    //     name: 'Superman',
    //     power: 'Fly',
    //     age: 30
    // })
    res.json({
        name: 'Superman',
        power: 'Fly',
        age: 30
    })
})

app.get('/batman', (req, res) => {
    res.json({
        name: 'Batman',
        power: 'Rich',
        age: 30
    })
})

app.get('/spiderman', (req, res) => {
    res.json({
        name: 'Spiderman',
        power: 'Web',
        age: 30,
        product: [
            {id: 1, name: 'Web', price: 100},
            {id: 2, name: 'Web', price: 100},
            {id: 3, name: 'Web', price: 100},
            {id: 4, name: 'Web', price: 100},
        ]
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})