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
    localStorage.setItem('MarcasMotoAtienden', data.marca_moto_atienden.join(', '));
    localStorage.setItem('Direccion', data.direccion);
    localStorage.setItem('NumeroTelefono', data.numero_telefono);
    localStorage.setItem('HorarioAtencion', data.horario_atencion);
  };

  return (
    <div>
      <h1>Lectura de Talleres de Servicio</h1>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Marcas de Moto que Atienden</Table.HeaderCell>
            <Table.HeaderCell>Dirección</Table.HeaderCell>
            <Table.HeaderCell>Número de Teléfono</Table.HeaderCell>
            <Table.HeaderCell>Horario de Atención</Table.HeaderCell>
            <Table.HeaderCell>Acciones</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {talleresData.map((data) => (
            <Table.Row key={data._id.$oid}>
              <Table.Cell>{data.nombre}</Table.Cell>
              <Table.Cell>{data.marca_moto_atienden.join(', ')}</Table.Cell>
              <Table.Cell>{data.direccion}</Table.Cell>
              <Table.Cell>{data.numero_telefono}</Table.Cell>
              <Table.Cell>{data.horario_atencion}</Table.Cell>
              <Table.Cell>
                <Link to="/updateTalleresDeServicio">
                  <Button color="blue" onClick={() => setData(data)}>
                    Actualizar
                  </Button>
                </Link>
                <Button color="red" onClick={() => onDelete(data._id.$oid)}>
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
