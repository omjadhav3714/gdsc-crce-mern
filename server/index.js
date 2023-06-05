const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect(process.env.DATABASE  || 'mongodb+srv://rentifyplatform:k7r5J0gXKcK8LTHw@mycluster.xj6mukw.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('DATABASE Connected'))
    .catch((err) => console.log('DATABASE Connection Error', err))

app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

const todoRoutes = require('./routes/todo.routes');
app.use('/api', todoRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log("Server is running");
})