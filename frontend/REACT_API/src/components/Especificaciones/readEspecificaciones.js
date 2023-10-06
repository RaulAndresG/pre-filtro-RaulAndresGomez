import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import '../../css/nav.css';
import logo1 from '../../css/logo1.png';
import { Link } from 'react-router-dom';

export default function ReadEspecificaciones() {
  const [especificacionesData, setEspecificacionesData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:7777/api/Especificaciones`)
      .then((response) => {
        setEspecificacionesData(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener los datos de especificaciones:', error);
      });
  }, []);

  const setData = (data) => {
    localStorage.setItem('ID', data._id);
    localStorage.setItem('ModeloMoto', JSON.stringify(data.modelo_moto));
    localStorage.setItem('Potencia', data.potencia);
    localStorage.setItem('Torque', data.torque);
    localStorage.setItem('PesoSeco', data.peso_seco);
    localStorage.setItem('AlturaAsiento', data.altura_asiento);
    localStorage.setItem('TipoChasis', data.tipo_chasis);
    localStorage.setItem('SuspensionDelantera', data.suspension_delantera);
    localStorage.setItem('SuspensionTrasera', data.suspension_trasera);
    localStorage.setItem('FrenosDelanteros', data.frenos_delanteros);
    localStorage.setItem('FrenosTraseros', data.frenos_traseros);
    localStorage.setItem('Neumaticos', data.neumaticos);
    localStorage.setItem('CapacidadTanque', data.capacidad_tanque);
    localStorage.setItem('Aceleracion0_100', data.aceleracion_0_100);
  };

  const getData = () => {
    axios.get(`http://localhost:7777/api/Especificaciones`).then((response) => {
      setEspecificacionesData(response.data);
    });
  };

  const onDelete = (_id) => {
    axios.delete(`http://localhost:7777/api/Especificaciones/${_id}`)
      .then(() => {
        getData();
      })
      .catch((error) => {
        console.error('Error al eliminar el elemento de especificaciones:', error);
      });
  };

  return (
    <div>
      <nav className='nav'>
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
            <Table.HeaderCell className='small-header'>Modelo de Moto</Table.HeaderCell>
            <Table.HeaderCell className='small-header'>Potencia</Table.HeaderCell>
            <Table.HeaderCell className='small-header'>Torque</Table.HeaderCell>
            <Table.HeaderCell className='small-header'>Peso Seco</Table.HeaderCell>
            <Table.HeaderCell className='small-header'>Altura de Asiento</Table.HeaderCell>
            <Table.HeaderCell className='small-header'>Tipo de Chasis</Table.HeaderCell>
            <Table.HeaderCell className='small-header'>Suspensión Delantera</Table.HeaderCell>
            <Table.HeaderCell className='small-header'>Suspensión Trasera</Table.HeaderCell>
            <Table.HeaderCell className='small-header'>Frenos Delanteros</Table.HeaderCell>
            <Table.HeaderCell className='small-header'>Frenos Traseros</Table.HeaderCell>
            <Table.HeaderCell className='small-header'>Neumáticos</Table.HeaderCell>
            <Table.HeaderCell className='small-header'>Capacidad del Tanque</Table.HeaderCell>
            <Table.HeaderCell className='small-header'>Aceleración 0-100</Table.HeaderCell>
            <Table.HeaderCell className='small-header'>Actualizar</Table.HeaderCell>
            <Table.HeaderCell className='small-header'>Eliminar</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {especificacionesData.map((data) => (
            <Table.Row key={data._id}>
              <Table.Cell className='casilla'>{data.modelo_moto ? data.modelo_moto.modelo : 'N/A'}</Table.Cell>
              <Table.Cell className='casilla'>{data.potencia}</Table.Cell>
              <Table.Cell className='casilla'>{data.torque}</Table.Cell>
              <Table.Cell className='casilla'>{data.peso_seco}</Table.Cell>
              <Table.Cell className='casilla'>{data.altura_asiento}</Table.Cell>
              <Table.Cell className='casilla'>{data.tipo_chasis}</Table.Cell>
              <Table.Cell className='casilla'>{data.suspension_delantera}</Table.Cell>
              <Table.Cell className='casilla'>{data.suspension_trasera}</Table.Cell>
              <Table.Cell className='casilla'>{data.frenos_delanteros}</Table.Cell>
              <Table.Cell className='casilla'>{data.frenos_traseros}</Table.Cell>
              <Table.Cell className='casilla'>{data.neumaticos}</Table.Cell>
              <Table.Cell className='casilla'>{data.capacidad_tanque}</Table.Cell>
              <Table.Cell className='casilla'>{data.aceleracion_0_100}</Table.Cell>
              <Table.Cell>
                <Link to="/updateEspecificaciones">
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
