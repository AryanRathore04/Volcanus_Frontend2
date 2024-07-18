import express from 'express'

const app = express()

//CRUD => Create, Read, Update, Delete

//Create - method => POST
//Read - method => GET
//Update - method => PUT
//Delete - method => DELETE

const port = 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})