const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
// routes
const usersRoutes = require('./routes/users');

dotenv.config();

// connect to DB
const url = process.env.ENVIRONMENT === 'qa' ? process.env.DB_LINK : 'mongodb://localhost:27017/water_admin';
mongoose.connect(url, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}, () => console.log('connected to DB'));

app.use(cors());
app.use(express.json());

app.use('/users', usersRoutes);

app.set('port', (process.env.PORT || 4000));

app.listen(app.get('port'), () => {
    console.log('server is running')
});



