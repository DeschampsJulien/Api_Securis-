const express = require('express');
const router = express.Router();

const userRoute = require('../routes/users');
const fileRoute = require('../routes/files');


/* OBTENIR la page d'accueil. */
router.get('/', async (req, res) =>{
  res.render('index', {
    title: 'Accueil'
  })
});

router.use('/users', userRoute);
router.use('/files', fileRoute);

module.exports = router;
