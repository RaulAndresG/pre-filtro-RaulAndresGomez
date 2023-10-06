import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function UpdateMarcas() {
  let history = useHistory();
  const [_id, setID] = useState(null);
  const [nombre, setNombre] = useState('');
  const [paisOrigen, setPaisOrigen] = useState('');
  const [anioFundacion, setAnioFundacion] = useState('');
  const [sitioWeb, setSitioWeb] = useState('');
  const [logotipo, setLogotipo] = useState('');

  useEffect(() => {
    setID(localStorage.getItem('ID'));
    setNombre(localStorage.getItem('Nombre'));
    setPaisOrigen(localStorage.getItem('PaisOrigen'));
    setAnioFundacion(localStorage.getItem('AnioFundacion'));
    setSitioWeb(localStorage.getItem('SitioWeb'));
    setLogotipo(localStorage.getItem('Logotipo'));
  }, []);

  const updateAPIData = () => {
    axios
      .put(`http://localhost:7777/api/Marcas/${_id}`, {
        nombre,
        pais_origen: paisOrigen,
        anio_fundacion: anioFundacion,
        sitio_web: sitioWeb,
        logotipo,
      })
      .then(() => {
        history.push('/readMarcas');
      });
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Nombre</label>
          <input
            placeholder="Nombre"
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
        <Button type="submit" onClick={updateAPIData}>
          ACTUALIZAR
        </Button>
      </Form>
    </div>
  );
}
