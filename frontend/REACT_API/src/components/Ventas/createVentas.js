import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

export default function CreateVentas() {
  let history = useHistory();
  const [modeloMotoID, setModeloMotoID] = useState('');
  const [anioVenta, setAnioVenta] = useState('');
  const [cantidadVendida, setCantidadVendida] = useState('');
  const [precioPromedioVenta, setPrecioPromedioVenta] = useState('');

  const postData = () => {
    axios
      .post(`http://localhost:7777/api/Ventas`, {
        modelo_moto: {
          _id: {
            $oid: modeloMotoID
          }
        },
        anio_venta: anioVenta,
        cantidad_vendida: cantidadVendida,
        precio_promedio_venta: precioPromedioVenta,
      })
      .then(() => {
        history.push('/readVentas');
      })
      .catch((error) => {
        console.error('Error al crear la venta:', error);
      });
  };

  return (
    <div>
      <h1>Crear Venta</h1>
      <Form className="create-form">
        <Form.Field>
          <label>ID del Modelo de Moto</label>
          <input
            placeholder="ID del Modelo de Moto"
            value={modeloMotoID}
            onChange={(e) => setModeloMotoID(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Año de Venta</label>
          <input
            placeholder="Año de Venta"
            value={anioVenta}
            onChange={(e) => setAnioVenta(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Cantidad Vendida</label>
          <input
            placeholder="Cantidad Vendida"
            value={cantidadVendida}
            onChange={(e) => setCantidadVendida(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Precio Promedio de Venta</label>
          <input
            placeholder="Precio Promedio de Venta"
            value={precioPromedioVenta}
            onChange={(e) => setPrecioPromedioVenta(e.target.value)}
          />
        </Form.Field>
        <Button type="submit" onClick={postData}>
          Crear Venta
        </Button>
      </Form>
    </div>
  );
}
