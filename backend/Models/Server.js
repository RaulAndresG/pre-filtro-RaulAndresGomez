

const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");



const routeAccesorios = require("../routes/Accesorios.routes.js")
const routeComentarios = require("../routes/Comentarios.routes.js")
const routeEspecificaciones = require('../routes/Especificaciones.routes.js')
const routeEventos = require('../routes/Eventos.routes.js')
const routeMarcas = require('../routes/Marcas.routes.js')
const routeMotos = require('../routes/Motos.routes.js')
const routeTalleresDeServicio = require('../routes/TalleresDeServicio.routes.js')
const routeVentas = require('../routes/Ventas.routes.js')


class Server{


    constructor(){
        this.app = express();
        
        this.port = process.env.PORT;
        this.AccesoriosPath = "/api/Accesorios"
        this.ComentariosPath = "/api/Comentarios"
        this.EspecificacionesPath = "/api/Especificaciones"
        this.EventosPath = "/api/Eventos"
        this.MarcasPath = "/api/Marcas"
        this.MotosPath = "/api/Motos"
        this.TalleresDeServicioPath = "/api/TalleresDeServicio"
        this.VentasPath = "/api/Ventas"



        // ! Middleware
        this.middlewares();
 

        //! Routes
        this.routes();
    }

    middlewares(){

        //! Cors
        this.app.use(cors());

        // ? PUBLIC DIRECTORY
        this.app.use(express.static('public'));

        //! EXPRESS JSON
        this.app.use(express.json());

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));

    }

    routes(){
        this.app.use(this.AccesoriosPath,routeAccesorios)
        this.app.use(this.ComentariosPath, routeComentarios)
        this.app.use(this.EspecificacionesPath, routeEspecificaciones)
        this.app.use(this.EventosPath, routeEventos)
        this.app.use(this.MarcasPath, routeMarcas)
        this.app.use(this.MotosPath,routeMotos)
        this.app.use(this.TalleresDeServicioPath,routeTalleresDeServicio)
        this.app.use(this.VentasPath,routeVentas)
        
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server: ${this.port} `);
        })
    }
}


module.exports = Server;

