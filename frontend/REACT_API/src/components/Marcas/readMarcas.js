import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../css/nav.css';
import logo1 from '../../css/logo1.png';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function ReadMarcas() {
  const [marcasData, setMarcasData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get(`http://localhost:7777/api/Marcas`).then((response) => {
      setMarcasData(response.data);
    });
  };

  const onDelete = (_id) => {
    axios
      .delete(`http://localhost:7777/api/Marcas/${_id}`)
      .then(() => {
        getData();
      })
      .catch((error) => {
        console.error('Error al eliminar el elemento:', error);
      });
  };

  const setData = (data) => {
    let { _id, nombre, pais_origen, anio_fundacion, sitio_web, logotipo } = data;
    localStorage.setItem('ID', _id);
    localStorage.setItem('Nombre', nombre);
    localStorage.setItem('PaisOrigen', pais_origen);
    localStorage.setItem('AnioFundacion', anio_fundacion);
    localStorage.setItem('SitioWeb', sitio_web);
    localStorage.setItem('Logotipo', logotipo);
  };

  return (
    <div>
   <nav className="nav">
  <h1>Marcas</h1>
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
            <Table.HeaderCell className="small-header">País de Origen</Table.HeaderCell>
            <Table.HeaderCell className="small-header">Año de Fundación</Table.HeaderCell>
            <Table.HeaderCell className="small-header">Sitio Web</Table.HeaderCell>
            <Table.HeaderCell className="small-header">Logotipo</Table.HeaderCell>
            <Table.HeaderCell className="small-header">Actualizar</Table.HeaderCell>
            <Table.HeaderCell className="border-header-izquierda">Eliminar</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {marcasData.map((data) => (
            <Table.Row key={data._id}>
              <Table.Cell className="casilla">{data.nombre}</Table.Cell>
              <Table.Cell className="casilla">{data.pais_origen}</Table.Cell>
              <Table.Cell className="casilla">{data.anio_fundacion}</Table.Cell>
              <Table.Cell className="casilla">{data.sitio_web}</Table.Cell>
              <Table.Cell className="casilla">{data.logotipo}</Table.Cell>
              <Table.Cell>
                <Link to={`/updateMarcas`}>
                  <Button className="boton" onClick={() => setData(data)}>
                    Actualizar
                  </Button>
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Button className="boton" onClick={() => onDelete(data._id)}>
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
///// no funciona el update el eliminar si y crear si 