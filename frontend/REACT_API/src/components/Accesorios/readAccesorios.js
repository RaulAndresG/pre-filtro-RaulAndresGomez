import axios from 'axios';
import '../../css/nav.css';
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
/*      localStorage.setItem('ModeloMotoMarca', data.modelo_moto_compatible[0].marca);
    localStorage.setItem('ModeloMotoModelo', data.modelo_moto_compatible[0].modelo);
    localStorage.setItem('ModeloMotoCilindraje', data.modelo_moto_compatible[0].cilindraje);
    localStorage.setItem('ModeloMotoAnio', data.modelo_moto_compatible[0].anio);
    localStorage.setItem('ModeloMotoTipoMotor', data.modelo_moto_compatible[0].tipo_motor);
    localStorage.setItem('ModeloMotoDescripcion', data.modelo_moto_compatible[0].descripcion);  */
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
  <nav className="nav">
  <h1>Accesorios</h1>
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

      <Table className='Table' singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className='border-header-derecha '>Nombre</Table.HeaderCell>
            <Table.HeaderCell className='small-header'>Descripcion</Table.HeaderCell>
            <Table.HeaderCell className='small-header'>Precio</Table.HeaderCell>
 {/*            <Table.HeaderCell className='small-header1'>ModeloMotoMarca</Table.HeaderCell>
            <Table.HeaderCell className='small-header1'>ModeloMotoModelo</Table.HeaderCell>
            <Table.HeaderCell className='small-header1'>ModeloMotoCilindraje</Table.HeaderCell>
            <Table.HeaderCell className='small-header1'>ModeloMotoAnio</Table.HeaderCell>
            <Table.HeaderCell className='small-header1'>ModeloMotoTipoMotor</Table.HeaderCell>
            <Table.HeaderCell className='small-header1'>ModeloMotoDescripcion</Table.HeaderCell */}
            <Table.HeaderCell className='small-header'>Actualizar</Table.HeaderCell>
            <Table.HeaderCell className='border-header-izquierda'>Eliminar</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {APIData.map((data) => (
            <Table.Row key={data._id.$oid}>
              <Table.Cell className='casilla'>{data.nombre}</Table.Cell>
              <Table.Cell className='casilla'>{data.descripcion}</Table.Cell>
              <Table.Cell className='casilla'>{data.precio}</Table.Cell>
        {/*        <Table.Cell className='casilla1'>{data.modelo_moto_compatible[0].marca}</Table.Cell>
              <Table.Cell className='casilla1'>{data.modelo_moto_compatible[0].modelo}</Table.Cell>
              <Table.Cell className='casilla1'>{data.modelo_moto_compatible[0].cilindraje}</Table.Cell>
              <Table.Cell className='casilla1'>{data.modelo_moto_compatible[0].anio}</Table.Cell>
              <Table.Cell className='casilla1'>{data.modelo_moto_compatible[0].tipo_motor}</Table.Cell>
              <Table.Cell className='casilla1'>{data.modelo_moto_compatible[0].descripcion}</Table.Cell>  */}
              <Table.Cell>
                <Link to='/updateAccesorios'>
                  <Button className='boton' onClick={() => setData(data)}>
                    Update
                  </Button>
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Button className='boton' onClick={() => onDelete(data._id)}>
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

//// nada
