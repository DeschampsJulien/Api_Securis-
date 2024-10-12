const express = require('express');
const router = express.Router();

const multer = require('multer');
const { storage } = require('../middlewares/files-storage');

router.get('/', async (req, res) => {
  res.status(200).json({
    name   : process.env.APP_NAME,
    version: '1.0',
    status : 200,
    message: 'Page files'
  });
});

const filesService = require('../services/files');

// Configuration de multer pour l'upload de fichiers
const upload = multer({ storage: storage });

// Route pour gérer l'upload de fichier
router.post('/', upload.single('upload_file'), filesService.createOneFile);

// Route pour lire les infos d'un fichier
router.get('/:id', filesService.getOneFile);

module.exports = router;

