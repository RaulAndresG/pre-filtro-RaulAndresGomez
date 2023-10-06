import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function ReadClientes() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:7777/api/Comentarios`)
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
    axios.delete(`http://localhost:7777/api/Comentarios/${_id}`).then(() => {
      getData();
    });
  };

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/readComentarios">Ir a la tabla Clientes</Link></li>
          <li><Link to="/readESpecificaciones">Ir a la tabla Inventario</Link></li>
          <li><Link to="/readEventos">Ir a la tabla Empleados</Link></li>
        </ul>
      </nav>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Usuario</Table.HeaderCell>
            <Table.HeaderCell>Comentario</Table.HeaderCell>
            <Table.HeaderCell>Calificación</Table.HeaderCell>
            <Table.HeaderCell>Modelo de Moto</Table.HeaderCell>
            <Table.HeaderCell>Actualizar</Table.HeaderCell>
            <Table.HeaderCell>Eliminar</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {APIData.map((data) => (
            <Table.Row key={data._id}>
              <Table.Cell>{data.usuario}</Table.Cell>
              <Table.Cell>{data.comentario}</Table.Cell>
              <Table.Cell>{data.calificacion}</Table.Cell>
              <Table.Cell>{data.modelo_moto ? 'Disponible' : 'No Disponible'}</Table.Cell>
              <Table.Cell>
                <Link to="/update">
                  <Button onClick={() => setData(data)}>Actualizar</Button>
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Button onClick={() => onDelete(data._id)}>Eliminar</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
