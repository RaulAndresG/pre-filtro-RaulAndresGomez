import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from "axios";
import { useHistory } from "react-router";

export default function UpdateComentarios() {
  let history = useHistory();
  const [_id, setID] = useState(null);
  const [usuario, setUsuario] = useState('');
  const [comentario, setComentario] = useState('');
  const [calificacion, setCalificacion] = useState(0);
  const [modeloMoto, setModeloMoto] = useState({});

  useEffect(() => {
    setID(localStorage.getItem('ID'));
    setUsuario(localStorage.getItem('Usuario'));
    setComentario(localStorage.getItem('Comentario'));
    setCalificacion(parseInt(localStorage.getItem('Calificacion')) || 0);
    setModeloMoto(JSON.parse(localStorage.getItem('ModeloMoto')) || {});
  }, []);

  const updateAPIData = () => {
    axios.put(`http://localhost:7777/api/Comentarios/${_id}`, {
      usuario,
      comentario,
      calificacion,
      modelo_moto: modeloMoto,
    }).then(() => {
      history.push('/readComentarios');
    });
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Usuario</label>
          <input placeholder="Usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Comentario</label>
          <input placeholder="Comentario" value={comentario} onChange={(e) => setComentario(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Calificación</label>
          <input type="number" placeholder="Calificación" value={calificacion} onChange={(e) => setCalificacion(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Modelo Moto</label>
          <input placeholder="Modelo Moto" value={modeloMoto} onChange={(e) => setModeloMoto(e.target.value)} />
        </Form.Field>

        <Button type="submit" onClick={updateAPIData}>ACTUALIZAR</Button>
      </Form>
    </div>
  );
}
