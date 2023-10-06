import React, { useState } from 'react';
import { Button, Form, TextArea } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function CreateEvento() {
  let history = useHistory();
  const [nombre, setNombre] = useState('');
  const [fechaLugar, setFechaLugar] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [marcasModelosDestacados, setMarcasModelosDestacados] = useState([]);
  const [error, setError] = useState('');

  const postData = () => {
    axios
      .post(`http://localhost:7777/api/Eventos`, {
        nombre,
        fecha_lugar: fechaLugar,
        descripcion,
        marcas_modelos_destacados: marcasModelosDestacados,
        error,
      })
      .then(() => {
        history.push('/readEventos');
      })
      .catch((error) => {
        console.error('Error al crear el evento:', error);
        setError('Error al crear el evento. Por favor, inténtalo de nuevo.');
      });
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Nombre del Evento</label>
          <input
            placeholder="Nombre del Evento"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Fecha y Lugar</label>
          <input
            placeholder="Fecha y Lugar"
            value={fechaLugar}
            onChange={(e) => setFechaLugar(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Descripción</label>
          <TextArea
            placeholder="Descripción"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Marcas y Modelos Destacados</label>
          <input
            placeholder="Marcas y Modelos Destacados"
            value={marcasModelosDestacados}
            onChange={(e) =>
              setMarcasModelosDestacados(
                e.target.value.split(',').map((item) => item.trim())
              )
            }
          ></input>
        </Form.Field>
        <Button type="submit" onClick={postData}>
          Crear
        </Button>
      </Form>
    </div>
  );
}
