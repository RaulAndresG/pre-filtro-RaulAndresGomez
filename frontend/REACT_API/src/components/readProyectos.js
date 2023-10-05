import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function ReadProyectos() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8001/api/Empresas`)
      .then((response) => {
        console.log(response.data);
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    let { _id, nombre, direccion, telefono,checkbox } = data;
    localStorage.setItem('ID', _id);
    localStorage.setItem('Nombre', nombre);
    localStorage.setItem('Apellido', direccion);
    localStorage.setItem('telefono', telefono);
    localStorage.setItem('Autorizacion', checkbox);
  };

  const getData = () => {
    axios.get(`http://localhost:8001/api/Empresas`).then((getData) => {
      setAPIData(getData.data);
    });
  };

  const onDelete = (_id) => {
    axios.get(`http://localhost:8001/api/Empresas/${_id}`).then(() => {
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
            <Table.HeaderCell>Direccion</Table.HeaderCell>
            <Table.HeaderCell>Telefono</Table.HeaderCell>
            <Table.HeaderCell>checkbox</Table.HeaderCell>
            <Table.HeaderCell>Actualizar</Table.HeaderCell>
            <Table.HeaderCell>Eliminar</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {APIData.map((data) => (
            <Table.Row key={data._id}>
              <Table.Cell>{data.nombre}</Table.Cell>
              <Table.Cell>{data.direccion}</Table.Cell>
              <Table.Cell>{data.telefono}</Table.Cell>
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
