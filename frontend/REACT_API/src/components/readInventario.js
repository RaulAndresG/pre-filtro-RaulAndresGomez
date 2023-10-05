import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function ReadInventario() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8001/api/Inventario`)
      .then((response) => {
        console.log(response.data);
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    let { _id, nombre, cantidad, proveedor,calidad,checkbox } = data;
    localStorage.setItem('ID', _id);
    localStorage.setItem('Nombre', nombre);
    localStorage.setItem('Apellido', cantidad);
    localStorage.setItem('proveedor', proveedor);
    localStorage.setItem('calidad', calidad);
    localStorage.setItem('Autorizacion', checkbox);
  };

  const getData = () => {
    axios.get(`http://localhost:8001/api/Inventario`).then((getData) => {
      setAPIData(getData.data);
    });
  };

  const onDelete = (_id) => {
    axios.get(`http://localhost:8001/api/Inventario/${_id}`).then(() => {
      getData();
    });
  };

  return (
    <div>
    <nav>
        <ul>
        <li><Link to="/readClientes">Ir a la tabla Clientes</Link></li>
        <li><Link to="/readInventario">Ir a la tabla Inventario</Link></li>
        <li><Link to="/read">Ir a la tabla Empleados</Link></li>
        <li><Link to="/readProyectos">Ir a la tabla Proyectos</Link></li>
    </ul>
      </nav>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Cantidad</Table.HeaderCell>
            <Table.HeaderCell>Proveedor</Table.HeaderCell>
            <Table.HeaderCell>Calidad</Table.HeaderCell>
            <Table.HeaderCell>checkbox</Table.HeaderCell>
            <Table.HeaderCell>Actualizar</Table.HeaderCell>
            <Table.HeaderCell>Eliminar</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {APIData.map((data) => (
            <Table.Row key={data._id}>
              <Table.Cell>{data.nombre}</Table.Cell>
              <Table.Cell>{data.cantidad}</Table.Cell>
              <Table.Cell>{data.proveedor}</Table.Cell>
              <Table.Cell>{data.calidad}</Table.Cell>
              <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
              <Table.Cell>
                <Link to="/update">
                  <Button onClick={() => setData(data)}>Update</Button>
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
