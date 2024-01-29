const mongoose = require("mongoose");

module.exports = () => {
  const connectionParams ={
    useNewUrlParser:true,
    useUnifiedTopology: true,
  };
   try {
    mongoose.connect(process.env.MONGO_URL, connectionParams);
    console.log('Base de donnée connectée');
   } catch(error) {
    console.log(error);
    console.log("pas connecté");
   }

};
 