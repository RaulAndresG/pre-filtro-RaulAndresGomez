import React, { useState, useEffect } from 'react';
import { Button, Form, Checkbox } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';
import '../../css/nav.css';


export default function UpdateEventos() {
  let history = useHistory();
  const [_id, setID] = useState(null);
  const [nombre, setNombre] = useState('');
  const [fechaLugar, setFechaLugar] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [marcasModelosDestacados, setMarcasModelosDestacados] = useState([]);
  const [checkbox, setCheckbox] = useState(false);

  useEffect(() => {
    setID(localStorage.getItem('ID'));
    setNombre(localStorage.getItem('Nombre'));
    setFechaLugar(localStorage.getItem('FechaLugar'));
    setDescripcion(localStorage.getItem('Descripcion'));
    setMarcasModelosDestacados(localStorage.getItem('MarcasModelosDestacados').split(', '));
  }, []);

  const updateAPIData = () => {
    axios
      .put(`http://localhost:7777/api/Eventos/${_id}`, {
        nombre,
        fecha_lugar: fechaLugar,
        descripcion,
        marcas_modelos_destacados: marcasModelosDestacados,
        checkbox,
      })
      .then(() => {
        history.push('/readEventos');
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
          <label>Fecha y Lugar</label>
          <input
            placeholder="Fecha y Lugar"
            value={fechaLugar}
            onChange={(e) => setFechaLugar(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Descripción</label>
          <input
            placeholder="Descripción"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Marcas y Modelos Destacados (separados por comas)</label>
          <input
            placeholder="Marcas y Modelos Destacados"
            value={marcasModelosDestacados.join(', ')}
            onChange={(e) =>
              setMarcasModelosDestacados(e.target.value.split(', '))
            }
          ></input>
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Acepto los términos y condiciones:"
            checked={checkbox}
            onChange={() => setCheckbox(!checkbox)}
          ></Checkbox>
        </Form.Field>
        <Button type="submit" onClick={updateAPIData}>
          ACTUALIZAR
        </Button>
      </Form>
    </div>
  );
}
