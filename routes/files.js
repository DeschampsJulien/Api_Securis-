const express = require('express');
const router = express.Router();

const multer = require('multer');
const { storage } = require('../middlewares/files-storage');
const filesService = require('../services/files');

router.get('/', async (req, res) => {
    res.status(200).json({
      name   : process.env.APP_NAME,
      version: '1.0',
      status : 200,
      message: 'Page files'
    });
  });

// Configuration de multer pour l'upload de fichiers
const upload = multer({ storage: storage });

// Route pour gérer l'upload de fichier
router.post('/', upload.single('upload_file'), filesService.createOneFile);

module.exports = router;