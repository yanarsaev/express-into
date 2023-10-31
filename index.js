const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/users', (req, res) => {
    res.send(['user 1', 'user 2', 'user 3'])
})

app.post('/users', (req, res) => {
    res.send('юзер добавлен')
})

app.delete('/users/:id', (req, res) => {
    res.json(`юзер с ID ${req.params.id} удален`)
}) 

app.patch('/users/:id', (req, res) => {
    res.json(`юзер с ID ${req.params.id} изменен`)
})

app.get('/admin', (req, res) => {
    res.send('не хватает прав доступа')
})

app.listen(port, () => {
    console.log(`Started. http://localhost:${port}`)
})