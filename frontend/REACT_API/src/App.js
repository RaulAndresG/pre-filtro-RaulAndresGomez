import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import Footer from './components/footer';

import ReadAccesorios from './components/Accesorios/readAccesorios';
import UpdateAccesorios from './components/Accesorios/updateAccesorios';
import CreateAccesorios from './components/Accesorios/createAccesorios';

import ReadComentarios from './components/Comentarios/readComentarios';
import UpdateComentarios from './components/Comentarios/updateComentarios';
import CreateComentarios from './components/Comentarios/createComentarios';

import ReadEspecificaciones from './components/Especificaciones/readEspecificaciones';
import UpdateEspecificaciones from './components/Especificaciones/updateEspecificaciones';
import CreateEspecificaciones from './components/Especificaciones/createEspecificaciones';

import ReadEventos from './components/Eventos/readEventos';
import UpdateEventos from './components/Eventos/updateEventos';
import CreateEventos from './components/Eventos/createEventos';

import ReadMarcas from './components/Marcas/readMarcas';
import UpdateMarcas from './components/Marcas/updateMarcas';
import CreateMarcas from './components/Marcas/createMarcas';

import ReadMotos from './components/Motos/readMotos';
import UpdateMotos from './components/Motos/updateMotos';
import CreateMotos from './components/Motos/createMotos';

import ReadTalleresDeServicio from './components/TalleresDeServicio/readTalleresDeServicio';
import UpdateTalleresDeServicio from './components/TalleresDeServicio/updateTalleresDeServicio';
import CreateTalleresDeServicio from './components/TalleresDeServicio/createTalleresDeServicio';

import ReadVentas from './components/Ventas/readVentas';
import UpdateVentas from './components/Ventas/updateVentas';
import CreateVentas from './components/Ventas/createVentas';

export default function App() {
  return (
    <Router>
      <div className="main">
        <div>
          <Route path="/createAccesorios" component={CreateAccesorios}></Route>
          <Route path="/createComentarios" component={CreateComentarios}></Route>
          <Route path="/createEspecificaciones" component={CreateEspecificaciones}></Route>
          <Route path="/createEventos" component={CreateEventos}></Route>
          <Route path="/createMarcas" component={CreateMarcas}></Route>
          <Route path="/createMotos" component={CreateMotos}></Route>
          <Route path="/createTalleresDeServicio" component={CreateTalleresDeServicio}></Route>
          <Route path="/createVentas" component={CreateVentas}></Route>
        </div>

        <div style={{ marginTop: 20 }}>
          <Route exact path="/readAccesorios" component={ReadAccesorios}></Route>
          <Route exact path="/updateAccesorios" component={UpdateAccesorios}></Route>

          <Route exact path="/readComentarios" component={ReadComentarios}></Route>
          <Route exact path="/updateComentarios" component={UpdateComentarios}></Route>

          <Route exact path="/readEspecificaciones" component={ReadEspecificaciones}></Route>
          <Route exact path="/updateEspecificaciones" component={UpdateEspecificaciones}></Route>

          <Route exact path="/readEventos" component={ReadEventos}></Route>
          <Route exact path="/updateEventos" component={UpdateEventos}></Route>

          <Route exact path="/readMarcas" component={ReadMarcas}></Route>
          <Route exact path="/updateMarcas" component={UpdateMarcas}></Route>

          <Route exact path="/readMotos" component={ReadMotos}></Route>
          <Route exact path="/updateMotos" component={UpdateMotos}></Route>

          <Route exact path="/readTalleresDeServicio" component={ReadTalleresDeServicio}></Route>
          <Route exact path="/updateTalleresDeServicio" component={UpdateTalleresDeServicio}></Route>

          <Route exact path="/readVentas" component={ReadVentas}></Route>
          <Route exact path="/updateVentas" component={UpdateVentas}></Route>
        </div>

        <div className="botones">
          <Link to="/createAccesorios">
            <Button>Crear Accesorio</Button>
          </Link>
          <Link to="/createComentarios">
            <Button>Crear Comentario</Button>
          </Link>
          <Link to="/createEspecificaciones">
            <Button>Crear Especificación</Button>
          </Link>
          <Link to="/createEventos">
            <Button>Crear Evento</Button>
          </Link>
          <Link to="/createMarcas">
            <Button>Crear Marca</Button>
          </Link>
          <Link to="/createMotos">
            <Button>Crear Moto</Button>
          </Link>
          <Link to="/createTalleresDeServicio">
            <Button>Crear Taller de Servicio</Button>
          </Link>
          <Link to="/createVentas">
            <Button>Crear Venta</Button>
          </Link>
        </div>
      </div>

      <Footer />
    </Router>
  );
}
