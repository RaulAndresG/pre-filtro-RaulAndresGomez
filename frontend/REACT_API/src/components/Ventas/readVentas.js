import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

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
      <h1>Lectura de Ventas</h1>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Modelo Moto</Table.HeaderCell>
            <Table.HeaderCell>Año de Venta</Table.HeaderCell>
            <Table.HeaderCell>Cantidad Vendida</Table.HeaderCell>
            <Table.HeaderCell>Precio Promedio de Venta</Table.HeaderCell>
            <Table.HeaderCell>Acciones</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {ventasData.map((data) => (
            <Table.Row key={data._id.$oid}>
              <Table.Cell>{`${data.modelo_moto.marca} ${data.modelo_moto.modelo}`}</Table.Cell>
              <Table.Cell>{data.anio_venta}</Table.Cell>
              <Table.Cell>{data.cantidad_vendida}</Table.Cell>
              <Table.Cell>{data.precio_promedio_venta}</Table.Cell>
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
