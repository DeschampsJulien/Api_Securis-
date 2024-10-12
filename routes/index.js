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

// router.get('/', async (req, res) => {
//   res.status(200).json({
//     name   : process.env.APP_NAME,
//     version: '1.0',
//     status : 200,
//     message: 'Page index'
//   });
// });

router.use('/users', userRoute);
router.use('/files', fileRoute);

module.exports = router;
