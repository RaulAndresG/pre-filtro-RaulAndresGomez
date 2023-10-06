import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';
import '../../css/nav.css';


export default function CreateMotos() {
  let history = useHistory();
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [cilindraje, setCilindraje] = useState('');
  const [anio, setAnio] = useState('');
  const [precio, setPrecio] = useState('');
  const [tipoMotor, setTipoMotor] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagenes, setImagenes] = useState([]);
  const [comentarios, setComentarios] = useState([]);

  const postData = () => {
    axios
      .post(`http://localhost:7777/api/Motos`, {
        marca,
        modelo,
        cilindraje,
        anio,
        precio,
        tipo_motor: tipoMotor,
        descripcion,
        imagenes,
        comentarios,
      })
      .then(() => {
        history.push('/readMotos');
      })
      .catch((error) => {
        console.error('Error al crear el elemento:', error);
      });
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Marca</label>
          <input
            placeholder="Marca"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Modelo</label>
          <input
            placeholder="Modelo"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Cilindraje</label>
          <input
            placeholder="Cilindraje"
            value={cilindraje}
            onChange={(e) => setCilindraje(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Año</label>
          <input
            placeholder="Año"
            value={anio}
            onChange={(e) => setAnio(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Precio</label>
          <input
            placeholder="Precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Tipo de Motor</label>
          <input
            placeholder="Tipo de Motor"
            value={tipoMotor}
            onChange={(e) => setTipoMotor(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Descripción</label>
          <textarea
            placeholder="Descripción"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          ></textarea>
        </Form.Field>
        <Form.Field>
          <label>Imágenes</label>
          <input
            placeholder="Imágenes (separadas por comas)"
            value={imagenes}
            onChange={(e) => setImagenes(e.target.value.split(','))}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Comentarios</label>
          <input
            placeholder="Comentarios (separados por comas)"
            value={comentarios}
            onChange={(e) => setComentarios(e.target.value.split(','))}
          ></input>
        </Form.Field>
        <Button type="submit" onClick={postData}>
          Crear
        </Button>
      </Form>
    </div>
  );
}
