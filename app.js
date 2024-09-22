const express      = require('express');
const cookieParser = require('cookie-parser');
const logger       = require('morgan');
const cors         = require('cors');

const path = require('path');

const mongodb     = require('./db/mongo');

const indexRouter = require('./routes/index');
// const filesRouter = require('./routes/files');

const app = express();

// Middleware setup
app.use(cors({
    exposedHeaders: ['Authorization'],
    origin: '*'
}));

// Connexion à la base de données MongoDB
mongodb.initClientDbConnection();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
// app.use('/files', filesRouter);

app.use((req, res, next) => {
    res.status(404).json({ name: 'API', version: '1.0', status: 404, message: 'not_found !  pas_trouvé !' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Server error ! Erreur serveur !');
});


// Informez l’application qu’elle va utiliser ce moteur de vue
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

module.exports = app;
