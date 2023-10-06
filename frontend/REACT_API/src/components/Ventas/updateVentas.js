import React, { useState, useEffect } from "react";
import { Button, Form } from 'semantic-ui-react';
import axios from "axios";
import { useHistory } from "react-router";
import '../../css/nav.css';


export default function UpdateVentas() {
  let history = useHistory();
  const [_id, setID] = useState(null);
/*   const [modeloMotoMarca, setModeloMotoMarca] = useState('');
  const [modeloMotoModelo, setModeloMotoModelo] = useState('');
  const [modeloMotoCilindraje, setModeloMotoCilindraje] = useState(0);
  const [modeloMotoAnio, setModeloMotoAnio] = useState(0); */
  const [precio, setPrecio] = useState(0);
  const [anioVenta, setAnioVenta] = useState(0);
  const [cantidadVendida, setCantidadVendida] = useState(0);
  const [precioPromedioVenta, setPrecioPromedioVenta] = useState(0);

  useEffect(()=>{
    setID(localStorage.getItem('ID'));
/*     setModeloMotoMarca(localStorage.getItem('ModeloMotoMarca'));
    setModeloMotoModelo(localStorage.getItem('ModeloMotoModelo'));
    setModeloMotoCilindraje(localStorage.getItem('ModeloMotoCilindraje'));
    setModeloMotoAnio(localStorage.getItem('ModeloMotoAnio')); */
    setPrecio(localStorage.getItem('Precio'));
    setAnioVenta(localStorage.getItem('AnioVenta'));
    setCantidadVendida(localStorage.getItem('CantidadVendida'));
    setPrecioPromedioVenta(localStorage.getItem('PrecioPromedioVenta'));
  },[]);

  const updateAPIData = () => {
    axios.put(`http://localhost:7777/api/Ventas/${_id}`,
      {
    /*     modelo_moto: {
          marca: modeloMotoMarca,
          modelo: modeloMotoModelo,
          cilindraje: modeloMotoCilindraje,
          anio: modeloMotoAnio,
        }, */
        precio,
        anio_venta: anioVenta,
        cantidad_vendida: cantidadVendida,
        precio_promedio_venta: precioPromedioVenta,
      }
    ).then(() => {
      history.push('/readVentas'); // Redirige a la página de lectura de ventas
    }).catch((error) => {
      console.error('Error al actualizar la venta:', error);
    });
  }

  return (
    <div>
      <h1>Actualizar Venta</h1>
      <Form className="create-form">
{/*         <Form.Field>
          <label>Marca de la Moto</label>
          <input placeholder="Marca de la Moto" value={modeloMotoMarca} onChange={(e) => setModeloMotoMarca(e.target.value)}></input>
        </Form.Field>
        <Form.Field>
          <label>Modelo de la Moto</label>
          <input placeholder="Modelo de la Moto" value={modeloMotoModelo} onChange={(e) => setModeloMotoModelo(e.target.value)}></input>
        </Form.Field>
        <Form.Field>
          <label>Cilindraje de la Moto</label>
          <input type="number" placeholder="Cilindraje de la Moto" value={modeloMotoCilindraje} onChange={(e) => setModeloMotoCilindraje(e.target.value)}></input>
        </Form.Field>
        <Form.Field>
          <label>Año de la Moto</label>
          <input type="number" placeholder="Año de la Moto" value={modeloMotoAnio} onChange={(e) => setModeloMotoAnio(e.target.value)}></input>
        </Form.Field> */}
        <Form.Field>
          <label>Precio</label>
          <input type="number" placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)}></input>
        </Form.Field>
        <Form.Field>
          <label>Año de Venta</label>
          <input type="number" placeholder="Año de Venta" value={anioVenta} onChange={(e) => setAnioVenta(e.target.value)}></input>
        </Form.Field>
        <Form.Field>
          <label>Cantidad Vendida</label>
          <input type="number" placeholder="Cantidad Vendida" value={cantidadVendida} onChange={(e) => setCantidadVendida(e.target.value)}></input>
        </Form.Field>
        <Form.Field>
          <label>Precio Promedio de Venta</label>
          <input type="number" placeholder="Precio Promedio de Venta" value={precioPromedioVenta} onChange={(e) => setPrecioPromedioVenta(e.target.value)}></input>
        </Form.Field>
        <Button type="submit" onClick={updateAPIData}>Actualizar Venta</Button>
      </Form>
    </div>
  );
}
