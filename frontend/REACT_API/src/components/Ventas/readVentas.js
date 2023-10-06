import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../../css/nav.css';


export default function ReadVentas() {
  const [ventasData, setVentasData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('http://localhost:7777/api/Ventas')
      .then((response) => {
        setVentasData(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener los datos de ventas:', error);
      });
  };

  const onDelete = (_id) => {
    axios
      .delete(`http://localhost:7777/api/Ventas/${_id}`)
      .then(() => {
        fetchData();
      })
      .catch((error) => {
        console.error('Error al eliminar la venta:', error);
      });
  };

  const setData = (data) => {
    localStorage.setItem('ID', data._id.$oid);
    localStorage.setItem('ModeloMotoID', data.modelo_moto._id.$oid);
    localStorage.setItem('MarcaModelo', `${data.modelo_moto.marca} ${data.modelo_moto.modelo}`);
    localStorage.setItem('AnioVenta', data.anio_venta);
    localStorage.setItem('CantidadVendida', data.cantidad_vendida);
    localStorage.setItem('PrecioPromedioVenta', data.precio_promedio_venta);
  };

  return (
    <div>
 <nav className="nav">
  <h1>Tu Título</h1>
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

      <h1>Lectura de Ventas</h1>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="small-header">Modelo Moto</Table.HeaderCell>
            <Table.HeaderCell className="small-header">Año de Venta</Table.HeaderCell>
            <Table.HeaderCell className="small-header">Cantidad Vendida</Table.HeaderCell>
            <Table.HeaderCell className="small-header">Precio Promedio de Venta</Table.HeaderCell>
            <Table.HeaderCell className="small-header">Acciones</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {ventasData.map((data) => (
            <Table.Row key={data._id.$oid}>
              
              <Table.Cell className="casilla">{`${data.modelo_moto.marca} ${data.modelo_moto.modelo}`}</Table.Cell>
              <Table.Cell className="casilla">{data.anio_venta}</Table.Cell>
              <Table.Cell className="casilla">{data.cantidad_vendida}</Table.Cell>
              <Table.Cell className="casilla">{data.precio_promedio_venta}</Table.Cell>
              <Table.Cell>
                <Link to="/updateVentas">
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
/// no funciona nada