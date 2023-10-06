import axios from 'axios';
import '../../css/nav.css'
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Read() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:7777/api/Accesorios`)
      .then((response) => {
        console.log(response.data);
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    let { _id, nombre, descripcion,Precio } = data;
    localStorage.setItem('ID', _id);
    localStorage.setItem('Nombre', nombre);
    localStorage.setItem('descripcion', descripcion);
    localStorage.setItem('Precio', Precio );
  };

  const getData = () => {
    axios.get(`http://localhost:7777/api/Accesorios`).then((getData) => {
      setAPIData(getData.data);
    });
  };
  const onDelete = (_id) => {
    axios.delete(`http://localhost:7777/api/Accesorios/${_id}`)
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
      <a><Link className='a' to="/readAccesorios">Accesorios</Link></a>
        <a><Link className='a' to="/readComentarios">Comentarios</Link></a>
        <a><Link className='a' to="/readEspecificaciones">Especificaciones</Link></a>
        <a><Link className='a' to="/readEventos">Eventos</Link></a>
        <a><Link className='a' to="/readMarcas">Marcas</Link></a>
        <a><Link className='a' to="/readMotos">Motos</Link></a>
        <a><Link className='a' to="/readTalleresDeServicio">TalleresDeServicio</Link></a>
        <a><Link className='a' to="/readVentas">Ventas</Link></a>



      </nav>
      <Table className='Table' singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className='small-header' >Nombre</Table.HeaderCell>
            <Table.HeaderCell className='small-header' >descripcion</Table.HeaderCell>
            <Table.HeaderCell className='small-header' >Precio</Table.HeaderCell>
            <Table.HeaderCell className='small-header' >Actualizar</Table.HeaderCell>
            <Table.HeaderCell className='small-header' >Eliminar</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {APIData.map((data) => (
            <Table.Row key={data._id}>
              <Table.Cell className='casilla' >{data.nombre}</Table.Cell>
              <Table.Cell className='casilla' >{data.descripcion}</Table.Cell>
              <Table.Cell className='casilla' >{data.Precio}</Table.Cell>
              <Table.Cell>
                <Link to="/update">
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