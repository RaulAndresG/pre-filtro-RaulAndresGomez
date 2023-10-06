import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../css/nav.css';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function ReadTalleresDeServicio() {
  const [talleresData, setTalleresData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('http://localhost:7777/api/TalleresDeServicio')
      .then((response) => {
        setTalleresData(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener los datos de talleres de servicio:', error);
      });
  };

  const onDelete = (_id) => {
    axios
      .delete(`http://localhost:7777/api/TalleresDeServicio/${_id}`)
      .then(() => {
        fetchData();
      })
      .catch((error) => {
        console.error('Error al eliminar el taller de servicio:', error);
      });
  };

  const setData = (data) => {
    localStorage.setItem('ID', data._id.$oid);
    localStorage.setItem('Nombre', data.nombre);
/*     localStorage.setItem('MarcasMotoAtienden', data.marca_moto_atienden.join(', ')); */
    localStorage.setItem('Direccion', data.direccion);
    localStorage.setItem('NumeroTelefono', data.numero_telefono);
    localStorage.setItem('HorarioAtencion', data.horario_atencion);
  };

  return (
    <div>
 <nav className="nav">
  <h1>TalleresDeServicio</h1>
  <img className="imagen"  />
  <a>
    <Link className="a" to="/readAccesorios">
      Accesorios
    </Link>
  </a>
  <a>
    <Link className="a" to="/readComentarios">
      Comentarios
    </Link>
  </a>
  <a>
    <Link className="a" to="/readEspecificaciones">
      Especificaciones
    </Link>
  </a>
  <a>
    <Link className="a" to="/readEventos">
      Eventos
    </Link>
  </a>
  <a>
    <Link className="a" to="/readMarcas">
      Marcas
    </Link>
  </a>
  <a>
    <Link className="a" to="/readMotos">
      Motos
    </Link>
  </a>
  <a>
    <Link className="a" to="/readTalleresDeServicio">
      TalleresDeServicio
    </Link>
  </a>
  <a>
    <Link className="a" to="/readVentas">
      Ventas
    </Link>
  </a>
</nav>

      <Table className="Table" singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="border-header-derecha ">Nombre</Table.HeaderCell>
            <Table.HeaderCell className="small-header">Marcas de Moto que Atienden</Table.HeaderCell>
            <Table.HeaderCell className="small-header">Dirección</Table.HeaderCell>
            <Table.HeaderCell className="small-header">Número de Teléfono</Table.HeaderCell>
{/*             <Table.HeaderCell className="small-header">Horario de Atención</Table.HeaderCell> */}
            <Table.HeaderCell className="small-header">Actualizar</Table.HeaderCell>
            <Table.HeaderCell className="border-header-izquierda">Eliminar</Table.HeaderCell>


          </Table.Row>
        </Table.Header>
        <Table.Body>
          {talleresData.map((data) => (
            <Table.Row key={data._id.$oid}>
              <Table.Cell className="casilla">{data.nombre}</Table.Cell>
{/*               <Table.Cell className="casilla">{data.marca_moto_atienden.join(', ')}</Table.Cell> */}
              <Table.Cell className="casilla">{data.direccion}</Table.Cell>
              <Table.Cell className="casilla">{data.numero_telefono}</Table.Cell>
              <Table.Cell className="casilla">{data.horario_atencion}</Table.Cell>
              
              

              <Table.Cell>
                <Link to="/updateTalleresDeServicio">
                  <Button className="boton"  onClick={() => setData(data)}>
                    Actualizar
                  </Button>
                </Link>
                </Table.Cell>
                <Table.Cell>
                <Button className="boton"   onClick={() => onDelete(data._id)}>
                  Eliminar
                </Button>
              </Table.Cell>
            
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}


//// funciona el  crear el update no y el delete no 