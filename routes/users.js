// const express = require('express');
// const router = express.Router();

// const service = require('../services/users');

// const private = require('../middlewares/private');

// /* GET users listing. */
// router.get('/:id', service.getById);
// router.put('/add', service.add);
// router.patch('/:id', service.update);
// router.delete('/:id', service.delete);
// router.post('/authenticate', service.authenticate);

// module.exports = router;


const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.status(200).json({
      name   : process.env.APP_NAME,
      version: '1.0',
      status : 200,
      message: 'Page users'
    });
  });

const service = require('../services/users');
// const private = require('../middlewares/private');

// Route pour lire les infos d'un utilisateur
router.get('/:id', service.getById);
// router.get('/:id', private.checkJWT, service.getById);

// Route pour ajouter un utilisateur
router.put('/add', service.add);

// Route pour modifier un utilisateur
router.patch('/:id', service.update);
// router.patch('/:id', private.checkJWT, service.update);

// Route pour supprimer un utilisateur
router.delete('/:id', service.delete);
// router.delete('/:id', private.checkJWT, service.delete);

// Ajout de la route authenticate
// router.post('/authenticate', service.authenticate);

module.exports = router;

