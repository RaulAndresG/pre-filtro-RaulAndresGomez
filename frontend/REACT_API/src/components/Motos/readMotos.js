import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../css/nav.css';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function ReadMotos() {
  const [motosData, setMotosData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get(`http://localhost:7777/api/Motos`)
    .then((response) => {
      setMotosData(response.data);
    });
  };

  const onDelete = (_id) => {
    axios
      .delete(`http://localhost:7777/api/Motos/${_id}`)
      .then(() => {
        getData();
      })
      .catch((error) => {
        console.error('Error al eliminar el elemento:', error);
      });
  };

  const setData = (data) => {
    let {
      _id,
      marca,
      modelo,
      cilindraje,
      anio,
      precio,
      tipo_motor,
      descripcion,
      imagenes,
      comentarios,
    } = data;
    localStorage.setItem('ID', _id);
    localStorage.setItem('Marca', marca);
    localStorage.setItem('Modelo', modelo);
    localStorage.setItem('Cilindraje', cilindraje);
    localStorage.setItem('Anio', anio);
    localStorage.setItem('Precio', precio);
    localStorage.setItem('TipoMotor', tipo_motor);
    localStorage.setItem('Descripcion', descripcion);
    localStorage.setItem('Imagenes', JSON.stringify(imagenes));
    localStorage.setItem('Comentarios', JSON.stringify(comentarios));
  };

  return (
    <div>
   <nav className="nav">
  <h1>Motos</h1>
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
            <Table.HeaderCell className="border-header-derecha ">Marca</Table.HeaderCell>
            <Table.HeaderCell className="small-header">Modelo</Table.HeaderCell>
            <Table.HeaderCell className="small-header">Cilindraje</Table.HeaderCell>
            <Table.HeaderCell className="small-header">Año</Table.HeaderCell>
            <Table.HeaderCell className="small-header">Precio</Table.HeaderCell>
            <Table.HeaderCell className="small-header">Tipo de Motor</Table.HeaderCell>
            <Table.HeaderCell className="small-header">Descripción</Table.HeaderCell>
            <Table.HeaderCell className="small-header">Actualizar</Table.HeaderCell>
            <Table.HeaderCell className="border-header-izquierda">Eliminar</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {motosData.map((data) => (
            <Table.Row key={data._id}>
              <Table.Cell className="casilla">{data.marca}</Table.Cell>
              <Table.Cell className="casilla">{data.modelo}</Table.Cell>
              <Table.Cell className="casilla">{data.cilindraje}</Table.Cell>
              <Table.Cell className="casilla">{data.anio}</Table.Cell>
              <Table.Cell className="casilla">{data.precio}</Table.Cell>
              <Table.Cell className="casilla">{data.tipo_motor}</Table.Cell>
              <Table.Cell className="casilla">{data.descripcion}</Table.Cell>
              <Table.Cell>
                <Link to={`/updateMotos`}>
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

///// funciona agregar y delete 
