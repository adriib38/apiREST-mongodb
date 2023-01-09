const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");

const publicationRoutes = require("./routes/publications");
const app = express();
const morgan = require('morgan');
const port = process.env.PORT || 3000;

//middleware
app.use(express.json())
app.use('/api', userRoutes);
app.use('/api', publicationRoutes);

//routes
app.get("/", (req, res) => {
    res.sendFile('app/index.html', {root: __dirname })
})

app.get("/", (req, res) => {
    res.sendFile('app/index.html', {root: __dirname })
})

app.get("/style.css", (req, res) => {
    res.sendFile('app/style.css', {root: __dirname })
})

app.get("/peticiones.js", (req, res) => {
    res.sendFile('app/peticiones.js', {root: __dirname })
})

app.get("/publicar", (req, res) => {
    res.sendFile('app/publicar.html', {root: __dirname })
})

//mongodb conection
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.error(error));

app.use(morgan('dev'));

app.listen(port, () => console.log('Server listening on port', port))
