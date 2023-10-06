import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function ReadInventario() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:7777/api/Especificaciones')
      .then((response) => {
        console.log(response.data);
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    let { _id, potencia, torque, peso_seco, altura_asiento, tipo_chasis, suspension_delantera, suspension_trasera, frenos_delanteros, frenos_traseros, neumaticos, capacidad_tanque, aceleracion_0_100, modelo_moto } = data;
    localStorage.setItem('_id', _id);
    localStorage.setItem('Potencia', potencia);
    localStorage.setItem('Torque', torque);
    localStorage.setItem('PesoSeco', peso_seco);
    localStorage.setItem('AlturaAsiento', altura_asiento);
    localStorage.setItem('TipoChasis', tipo_chasis);
    localStorage.setItem('SuspensionDelantera', suspension_delantera);
    localStorage.setItem('SuspensionTrasera', suspension_trasera);
    localStorage.setItem('FrenosDelanteros', frenos_delanteros);
    localStorage.setItem('FrenosTraseros', frenos_traseros);
    localStorage.setItem('Neumaticos', neumaticos);
    localStorage.setItem('CapacidadTanque', capacidad_tanque);
    localStorage.setItem('Aceleracion0_100', aceleracion_0_100);
    localStorage.setItem('ModeloMoto', JSON.stringify(modelo_moto));

  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/readClientes">Ir a la tabla Clientes</Link>
          </li>
          <li>
            <Link to="/readInventario">Ir a la tabla Inventario</Link>
          </li>
          <li>
            <Link to="/read">Ir a la tabla Empleados</Link>
          </li>
          <li>
            <Link to="/readProyectos">Ir a la tabla Proyectos</Link>
          </li>
        </ul>
      </nav>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Potencia</Table.HeaderCell>
            <Table.HeaderCell>Torque</Table.HeaderCell>
            <Table.HeaderCell>Peso Seco</Table.HeaderCell>
            <Table.HeaderCell>Altura Asiento</Table.HeaderCell>
            <Table.HeaderCell>Tipo Chasis</Table.HeaderCell>
            <Table.HeaderCell>Suspensión Delantera</Table.HeaderCell>
            <Table.HeaderCell>Suspensión Trasera</Table.HeaderCell>
            <Table.HeaderCell>Frenos Delanteros</Table.HeaderCell>
            <Table.HeaderCell>Frenos Traseros</Table.HeaderCell>
            <Table.HeaderCell>Neumáticos</Table.HeaderCell>
            <Table.HeaderCell>Capacidad Tanque</Table.HeaderCell>
            <Table.HeaderCell>Aceleración 0-100</Table.HeaderCell>
            <Table.HeaderCell>Actualizar</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {APIData.map((data) => (
            <Table.Row key={data._id}>
              <Table.Cell>{data.potencia}</Table.Cell>
              <Table.Cell>{data.torque}</Table.Cell>
              <Table.Cell>{data.peso_seco}</Table.Cell>
              <Table.Cell>{data.altura_asiento}</Table.Cell>
              <Table.Cell>{data.tipo_chasis}</Table.Cell>
              <Table.Cell>{data.suspension_delantera}</Table.Cell>
              <Table.Cell>{data.suspension_trasera}</Table.Cell>
              <Table.Cell>{data.frenos_delanteros}</Table.Cell>
              <Table.Cell>{data.frenos_traseros}</Table.Cell>
              <Table.Cell>{data.neumaticos}</Table.Cell>
              <Table.Cell>{data.capacidad_tanque}</Table.Cell>
              <Table.Cell>{data.aceleracion_0_100}</Table.Cell>
              <Table.Cell>
                <Link to="/update">
                  <Button onClick={() => setData(data)}>Update</Button>
                </Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
