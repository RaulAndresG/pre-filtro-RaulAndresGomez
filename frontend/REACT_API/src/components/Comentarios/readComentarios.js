import axios from 'axios';
import '../../css/nav.css';
import logo1 from '../../css/logo1.png';

import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function ReadComentarios() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:7777/api/Comentarios`)
      .then((response) => {
        console.log(response.data);
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    let { _id, usuario, comentario, calificacion, modelo_moto } = data;
    localStorage.setItem('ID', _id);
    localStorage.setItem('Usuario', usuario);
    localStorage.setItem('Comentario', comentario);
    localStorage.setItem('Calificacion', calificacion);
    localStorage.setItem('ModeloMoto', JSON.stringify(modelo_moto));
  };

  const getData = () => {
    axios.get(`http://localhost:7777/api/Comentarios`).then((getData) => {
      setAPIData(getData.data);
    });
  };

  const onDelete = (_id) => {
    axios.delete(`http://localhost:7777/api/Comentarios/${_id}`)
      .then(() => {
        getData();
      })
      .catch((error) => {
        console.error('Error al eliminar el elemento:', error);
      });
  };

  return (
    <div>
      <nav className='nav' >
        <h1>Gestion Empresarial</h1>
        <img className='imagen' src={logo1} alt="Descripción de la imagen" />

        <a><Link className='a' to="/readClientes">Clientes</Link></a>
        <a><Link className='a' to="/readInventario">Inventario</Link></a>
        <a><Link className='a' to="/readEmpleados">Empleados</Link></a>
        <a><Link className='a' to="/readProyectos">Proyectos</Link></a>
        <a><Link className='a' to="/readEmpresas">Empresas</Link></a>
        <a><Link className='a' to="/readUsuarios">Usuarios</Link></a>
      </nav>
      <Table className='Table' singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className='small-header' >Usuario</Table.HeaderCell>
            <Table.HeaderCell className='small-header' >Comentario</Table.HeaderCell>
            <Table.HeaderCell className='small-header' >Calificación</Table.HeaderCell>
            <Table.HeaderCell className='small-header' >Modelo Moto</Table.HeaderCell>
            <Table.HeaderCell className='small-header' >Actualizar</Table.HeaderCell>
            <Table.HeaderCell className='small-header' >Eliminar</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {APIData.map((data) => (
            <Table.Row key={data._id}>
              <Table.Cell className='casilla' >{data.usuario}</Table.Cell>
              <Table.Cell className='casilla' >{data.comentario}</Table.Cell>
              <Table.Cell className='casilla' >{data.calificacion}</Table.Cell>
              <Table.Cell className='casilla' >{JSON.stringify(data.modelo_moto)}</Table.Cell>
              <Table.Cell>
                <Link to="/updateComentarios">
                  <Button className='boton' onClick={() => setData(data)}>Update</Button>
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Button className='boton' onClick={() => onDelete(data._id)}>Eliminar</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
