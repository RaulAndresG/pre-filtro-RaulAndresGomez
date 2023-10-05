const mongoose = require('mongoose');
const conectarDB = async ()=>{
    try {
        const connectionDB = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,

        })  
        const url = `Conectado al wifi ${connectionDB.connection.host}- en el puerto ${connectionDB.connection.port}`;
        console.log(url);    
    } catch (error) {
        console.log(`${error.message}`);
        process.exit(1);
    }
};

module.exports = conectarDB;