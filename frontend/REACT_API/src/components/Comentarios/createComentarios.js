import React, { useState } from "react";
import { Button, Form } from 'semantic-ui-react';
import axios from "axios";
import { useHistory } from "react-router";
import '../../css/nav.css';


export default function CreateComentarios() {
  let history = useHistory();
  /* const [modeloMotoId, setModeloMotoId] = useState(''); */
  const [usuario, setUsuario] = useState('');
  const [comentario, setComentario] = useState('');
  const [calificacion, setCalificacion] = useState('');
  const [error, setError] = useState('')

  const postData = () => {
    axios.post(`http://localhost:7777/api/Comentarios`, {
      /* modelo_moto: modeloMotoId, */
      usuario,
      comentario,
      calificacion,
      error
    }).then(() => {
      history.push('/readComentarios');
    })
    .catch((error) => {
      console.error('Error al crear el elemento:', error);
      setError('Error al crear el elemento. Por favor, inténtalo de nuevo.');
    });
  };

  return (
    <div>
      <Form className="create-form">
      {/*   <Form.Field>
          <label>ModeloMotoId</label>
          <input placeholder="ModeloMotoId" value={modeloMotoId} onChange={(e) => setModeloMotoId(e.target.value)} ></input>
        </Form.Field> */}
        <Form.Field>
          <label>Usuario</label>
          <input placeholder="Usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} ></input>
        </Form.Field>
        <Form.Field>
          <label>Comentario</label>
          <input placeholder="Comentario" value={comentario} onChange={(e) => setComentario(e.target.value)} ></input>
        </Form.Field>
        <Form.Field>
          <label>Calificacion</label>
          <input placeholder="Calificacion" value={calificacion} onChange={(e) => setCalificacion(e.target.value)} ></input>
        </Form.Field>
        <Button type="submit" onClick={postData}>Crear</Button>
      </Form>
    </div>
  );
}
