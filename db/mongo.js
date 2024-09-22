const mongoose = require('mongoose')

const clientOptions = {
    // useNewUrlParser : true,
    dbName          : 'apinode'
};

exports.initClientDbConnection = async () => {
    try {
        /* ATTENTION
        Ajouter au fichier ".env" URL_MONGO prends pour valeur la chaîne de connexion de vôtre cluster mongoBD
        */
        await mongoose.connect(process.env.URL_MONGO, clientOptions);
        console.log('Connected MongoDB, YES !!:) ');
    } catch (error) {
        console.error('Error Connected MongoDB, NO !!;( ', error);
        throw error;
    }
}