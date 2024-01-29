// const express = require("express");
// // const connectDB = require("./config/db");
const mongoose = require('mongoose');
// const EmployeeModel = require('./models/Employee')
// // const port = process.env.PORT || 5000; // Utiliser le port défini dans les variables d'environnement ou le port 5000 par défaut
// require('dotenv').config();
// // Connexion à la DB
// // connectDB();

// const app = express();

// // Middleware qui permet de traiter les données de la Request
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// // app.use("/post", require("./routes/post.routes"));
// mongoose
//   .connect("mongodb+srv://jahreuf:Djilo13dia@app-test.1kg1yqb.mongodb.net/employee", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("base de donnees connecté");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// app.post("/register", (req, res) => {
//   EmployeeModel.create(req.body)
//     .then((employees) => res.json(employees))
//     .catch((err) => {
//       console.error(err);
//       res.status(500).json({ error: "Internal Server Error" });
//     });
// });

// // Lancer le serveur
// app.listen(3000, () => console.log("Le serveur a démarré au port " + 3000));
const express = require ('express')
mongoose.set('strictQuery', true); // Définit l'option strictQuery sur

const APP = express();
const cors = require ('cors');
require('dotenv').config();
const connection = require("./config/db");
const userRoutes = require ('./routes/users');
const authRoutes = require ("./routes/auth");

// database connection
connection();

APP.use(express.json());
APP.use(cors());

APP.use("/api/users",userRoutes)
APP.use("/api/users", authRoutes);


// Définir un dossier pour servir des fichiers statiques (images)

const port = process.env.PORT || 8080; // Utiliser le port défini dans les variables d'environnement ou le port 5000 par défaut
APP.listen(port, () => console.log(`backListening on port ${port}...`));
