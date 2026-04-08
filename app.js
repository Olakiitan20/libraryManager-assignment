require('dotenv').config();

const express = require('express');
//const mongoose = require("mongoose");
const connectDB = require ('../LibrarySystem/config/database');

const attendantRoutes = require('./routes/attendantRoutes')
const authorRoutes = require('./routes/authorRoutes');
const booksRoutes = require('./routes/booksRoutes')
const studentsRoutes = require('./routes/studentsRoutes');

connectDB();

const app = express();

app.use(express.json());
app.get('/', (req, res) => {res.status(200).json({message:"your app is live"})}) 
// Routes
app.use('/api', studentsRoutes);
app.use('/api', authorRoutes);
app.use('/api', booksRoutes);
app.use('/api', attendantRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
