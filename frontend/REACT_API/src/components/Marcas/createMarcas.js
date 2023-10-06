import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';
import '../../css/nav.css';


export default function CreateMarcas() {
  let history = useHistory();
  const [nombre, setNombre] = useState('');
  const [paisOrigen, setPaisOrigen] = useState('');
  const [anioFundacion, setAnioFundacion] = useState('');
  const [sitioWeb, setSitioWeb] = useState('');
  const [logotipo, setLogotipo] = useState('');

  const postData = () => {
    axios
      .post(`http://localhost:7777/api/Marcas`, {
        nombre,
        pais_origen: paisOrigen,
        anio_fundacion: anioFundacion,
        sitio_web: sitioWeb,
        logotipo: logotipo,
      })
      .then(() => {
        history.push('/readMarcas');
      })
      .catch((error) => {
        console.error('Error al crear el elemento:', error);
      });
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Nombre de la Marca</label>
          <input
            placeholder="Nombre de la Marca"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>País de Origen</label>
          <input
            placeholder="País de Origen"
            value={paisOrigen}
            onChange={(e) => setPaisOrigen(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Año de Fundación</label>
          <input
            placeholder="Año de Fundación"
            value={anioFundacion}
            onChange={(e) => setAnioFundacion(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Sitio Web</label>
          <input
            placeholder="Sitio Web"
            value={sitioWeb}
            onChange={(e) => setSitioWeb(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Logotipo</label>
          <input
            placeholder="Logotipo"
            value={logotipo}
            onChange={(e) => setLogotipo(e.target.value)}
          ></input>
        </Form.Field>
        <Button type="submit" onClick={postData}>
          Crear
        </Button>
      </Form>
    </div>
  );
}
