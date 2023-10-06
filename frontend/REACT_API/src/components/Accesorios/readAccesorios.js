import axios from 'axios';
import '../../css/nav.css';
import logo1 from '../../css/logo1.png';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function ReadAccesorios() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:7777/api/Accesorios`).then((response) => {
      console.log(response.data);
      setAPIData(response.data);
    });
  }, []);

  const setData = (data) => {
    localStorage.setItem('ID', data._id.$oid);
    localStorage.setItem('Nombre', data.nombre);
    localStorage.setItem('Descripcion', data.descripcion);
    localStorage.setItem('Precio', data.precio);
    localStorage.setItem('ModeloMotoMarca', data.modelo_moto_compatible[0].marca);
    localStorage.setItem('ModeloMotoModelo', data.modelo_moto_compatible[0].modelo);
    localStorage.setItem('ModeloMotoCilindraje', data.modelo_moto_compatible[0].cilindraje);
    localStorage.setItem('ModeloMotoAnio', data.modelo_moto_compatible[0].anio);
    localStorage.setItem('ModeloMotoTipoMotor', data.modelo_moto_compatible[0].tipo_motor);
    localStorage.setItem('ModeloMotoDescripcion', data.modelo_moto_compatible[0].descripcion);
  };

  const getData = () => {
    axios.get(`http://localhost:7777/api/Accesorios`).then((getData) => {
      setAPIData(getData.data);
    });
  };

  const onDelete = (_id) => {
    axios
      .delete(`http://localhost:7777/api/Accesorios/${_id}`)
      .then(() => {
        getData();
      })
      .catch((error) => {
        console.error('Error al eliminar el elemento:', error);
      });
  };

  return (
    <div>
      <nav className='nav'>
        <h1>Gestion Empresarial</h1>
        <img className='imagen' src={logo1} alt='Descripción de la imagen' />
        <a>
          <Link className='a' to='/Accesorios'>
            Accesorios
          </Link>
        </a>
        <a>
          <Link className='a' to='/Comentarios'>
            Comentarios
          </Link>
        </a>
        <a>
          <Link className='a' to='/Especificaciones'>
            Especificaciones
          </Link>
        </a>
        <a>
          <Link className='a' to='/Eventos'>
            Eventos
          </Link>
        </a>
        <a>
          <Link className='a' to='/Marcas'>
            Marcas
          </Link>
        </a>
        <a>
          <Link className='a' to='/Motos'>
            Motos
          </Link>
        </a>
        <a>
          <Link className='a' to='/TalleresDeServicio'>
            TalleresDeServicio
          </Link>
        </a>
        <a>
          <Link className='a' to='/Ventas'>
            Ventas
          </Link>
        </a>
      </nav>
      <Table className='Table1' singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className='small-header1'>Nombre</Table.HeaderCell>
            <Table.HeaderCell className='small-header1'>Descripcion</Table.HeaderCell>
            <Table.HeaderCell className='small-header1'>Precio</Table.HeaderCell>
            <Table.HeaderCell className='small-header1'>ModeloMotoMarca</Table.HeaderCell>
            <Table.HeaderCell className='small-header1'>ModeloMotoModelo</Table.HeaderCell>
            <Table.HeaderCell className='small-header1'>ModeloMotoCilindraje</Table.HeaderCell>
            <Table.HeaderCell className='small-header1'>ModeloMotoAnio</Table.HeaderCell>
            <Table.HeaderCell className='small-header1'>ModeloMotoTipoMotor</Table.HeaderCell>
            <Table.HeaderCell className='small-header1'>ModeloMotoDescripcion</Table.HeaderCell>
            <Table.HeaderCell className='small-header1'>Actualizar</Table.HeaderCell>
            <Table.HeaderCell className='small-header1'>Eliminar</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {APIData.map((data) => (
            <Table.Row key={data._id.$oid}>
              <Table.Cell className='casilla1'>{data.nombre}</Table.Cell>
              <Table.Cell className='casilla1'>{data.descripcion}</Table.Cell>
              <Table.Cell className='casilla1'>{data.precio}</Table.Cell>
              <Table.Cell className='casilla1'>{data.modelo_moto_compatible[0].marca}</Table.Cell>
              <Table.Cell className='casilla1'>{data.modelo_moto_compatible[0].modelo}</Table.Cell>
              <Table.Cell className='casilla1'>{data.modelo_moto_compatible[0].cilindraje}</Table.Cell>
              <Table.Cell className='casilla1'>{data.modelo_moto_compatible[0].anio}</Table.Cell>
              <Table.Cell className='casilla1'>{data.modelo_moto_compatible[0].tipo_motor}</Table.Cell>
              <Table.Cell className='casilla1'>{data.modelo_moto_compatible[0].descripcion}</Table.Cell>
              <Table.Cell>
                <Link to='/updateAccesorios'>
                  <Button className='boton1' onClick={() => setData(data)}>
                    Update
                  </Button>
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Button className='boton1' onClick={() => onDelete(data._id.$oid)}>
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
