import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from "axios";
import { useHistory } from "react-router";

export default function UpdateAccesorios() {
  let history = useHistory();
  const [_id, setID] = useState(null);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [modeloMotoMarca, setModeloMotoMarca] = useState('');
  const [modeloMotoModelo, setModeloMotoModelo] = useState('');
  const [modeloMotoCilindraje, setModeloMotoCilindraje] = useState('');
  const [modeloMotoAnio, setModeloMotoAnio] = useState('');
  const [modeloMotoTipoMotor, setModeloMotoTipoMotor] = useState('');
  const [modeloMotoDescripcion, setModeloMotoDescripcion] = useState('');

  useEffect(()=>{
    setID(localStorage.getItem('ID'));
    setNombre(localStorage.getItem('Nombre'));
    setDescripcion(localStorage.getItem('Descripcion'));
    setPrecio(localStorage.getItem('Precio'));
    setModeloMotoMarca(localStorage.getItem('ModeloMotoMarca'));
    setModeloMotoModelo(localStorage.getItem('ModeloMotoModelo'));
    setModeloMotoCilindraje(localStorage.getItem('ModeloMotoCilindraje'));
    setModeloMotoAnio(localStorage.getItem('ModeloMotoAnio'));
    setModeloMotoTipoMotor(localStorage.getItem('ModeloMotoTipoMotor'));
    setModeloMotoDescripcion(localStorage.getItem('ModeloMotoDescripcion'));
  },[]);

  const updateAPIData = () => {
    axios.put(`http://localhost:7777/api/Accesorios/${_id}`,
      {
        nombre,
        descripcion,
        precio,
        modelo_moto_compatible: [
          {
            marca: modeloMotoMarca,
            modelo: modeloMotoModelo,
            cilindraje: modeloMotoCilindraje,
            anio: modeloMotoAnio,
            tipo_motor: modeloMotoTipoMotor,
            descripcion: modeloMotoDescripcion,
          }
        ]
      }
    ).then(() => {
      history.push('/Accesorios');
    })
  }

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Nombre</label>
          <input placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
        </Form.Field>
        <Form.Field>
          <label>Descripcion</label>
          <input placeholder="Descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></input>
        </Form.Field>
        <Form.Field>
          <label>Precio</label>
          <input placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)}></input>
        </Form.Field>
        <Form.Field>
          <label>ModeloMotoMarca</label>
          <input placeholder="ModeloMotoMarca" value={modeloMotoMarca} onChange={(e) => setModeloMotoMarca(e.target.value)}></input>
        </Form.Field>
        <Form.Field>
          <label>ModeloMotoModelo</label>
          <input placeholder="ModeloMotoModelo" value={modeloMotoModelo} onChange={(e) => setModeloMotoModelo(e.target.value)}></input>
        </Form.Field>
        <Form.Field>
          <label>ModeloMotoCilindraje</label>
          <input placeholder="ModeloMotoCilindraje" value={modeloMotoCilindraje} onChange={(e) => setModeloMotoCilindraje(e.target.value)}></input>
        </Form.Field>
        <Form.Field>
          <label>ModeloMotoAnio</label>
          <input placeholder="ModeloMotoAnio" value={modeloMotoAnio} onChange={(e) => setModeloMotoAnio(e.target.value)}></input>
        </Form.Field>
        <Form.Field>
          <label>ModeloMotoTipoMotor</label>
          <input placeholder="ModeloMotoTipoMotor" value={modeloMotoTipoMotor} onChange={(e) => setModeloMotoTipoMotor(e.target.value)}></input>
        </Form.Field>
        <Form.Field>
          <label>ModeloMotoDescripcion</label>
          <input placeholder="ModeloMotoDescripcion" value={modeloMotoDescripcion} onChange={(e) => setModeloMotoDescripcion(e.target.value)}></input>
        </Form.Field>
        <Button type="submit" onClick={updateAPIData}>Actualizar</Button>
      </Form>
    </div>
  );
}
