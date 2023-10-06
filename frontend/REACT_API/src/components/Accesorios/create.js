import React, { useState } from "react";
import { Button,Form } from 'semantic-ui-react';
import axios from "axios";
import { useHistory } from "react-router";

export default function Create() {
  let history = useHistory();
  const [nombre, setName] = useState('');
  const [descripcion, setDes] = useState('');
  const [precio, setPre] = useState('')
  const [error, setError] = useState('');

  const postData = () => {
    axios.post(`http://localhost:7777/api/Accesorios`, {
      nombre,
      descripcion,
      precio,
      error
    }).then(() => {
        history.push('/read');
      })
      .catch((error) => {
        console.error('Error al crear el elemento:', error);
        setError('Error al crear el elemento. Por favor, inténtalo de nuevo.');
      });
  };

  return (
    <div>
      <Form className="create-form">

        <Form.Field>
          <label>Nombre</label>
          <input placeholder="Nombre" value={nombre} onChange={(e) => setName(e.target.value)} ></input>
        </Form.Field>

        <Form.Field>
          <label>descripcion</label>
          <input placeholder="descripcion" value={descripcion} onChange={(e) => setDes(e.target.value)} ></input>
        </Form.Field>

        <Form.Field>
          <label>precio</label>
          <input placeholder="precio" value={precio} onChange={(e) => setPre(e.target.value)} ></input>
        </Form.Field>

        <Button type="submit" onClick={postData}>Crear</Button>
      </Form>
    </div>
  );
}