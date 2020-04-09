const express = require('express');
const mongoose = require('mongoose');
//const Memberdb = require('./models/Member');

const app = express();

app.use(express.urlencoded({
    extended: false
}))

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/WebProject', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected.'))
    .catch(err => console.log(err));


app.get('/', (req, res) => {

    res.send('<h1>Hello</h1>')

})

const register = require('./routes/register');
app.use('/register', register);

app.use(express.static('./public'));


app.listen(process.env.port || 8080);