// // routes/hotelRoutes.js
// const express = require("express");
// const router = express.Router();
// const multer = require("multer"); // Import de multer pour gérer les téléchargements de fichiers
// const Hotel = require("../models/Hotel");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/"); // Indique le dossier où les fichiers seront téléchargés
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname); // Conserve le nom original du fichier
//   },
// });

// const upload = multer({ storage: storage });

// // POST pour télécharger une image
// router.post("/upload", upload.single("image"), (req, res) => {
//   res.status(200).json({ message: "Image uploaded successfully" });
// });

// // Autres routes CRUD...

// module.exports = router;
