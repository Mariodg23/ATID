import bodyParser from 'body-parser';
import express from 'express';
import atidRoutes from './routes/atidRoutes';
import mongoose from 'mongoose';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/attendanceID', atidRoutes);


app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
})

// Mongo connection
mongoose.connect('mongodb://localhost:27017/ATID', (err) => {
    if (err) throw err;
 
    console.log('Base de Datos en Linea');
})