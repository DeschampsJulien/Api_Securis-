const { storage } = require('../middlewares/files-storage');
const File = require('../models/file');
const fs = require('fs');

//  Méthode pour créer un fichier
exports.createOneFile = (req, res, next) => {
    const file = new File({
        name: req.file.filename,
        description: req.body.description,
        fileUrl: `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`,
        userId: req.body.userId
    });

    file.save()
        .then(() => {
            res.status(201).json({ message: 'Fichier enregistré avec succès !' });
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
};

// Méthode chargée de récupérer un fichier
exports.getOneFile = (req, res, next) => {
    File.findOne({ _id: req.params.id })
    .then(File = res.status(200).json(File))
    .catch(error = res.status(404).json({ error }));
};

// Méthode chargée de récupérer un fichier
// exports.getOneFile = async (req, res, next) => {
//     const id = req.params.id

//     try {
//         let File = await File.findById(id);

//         if (File) {
//             return res.status(200).json(user);
//         }
//         return res.status(404).json('Fichier_introuvable');
//     } catch (error) {
//         return res.status(501).json(error);
//     }
// }
