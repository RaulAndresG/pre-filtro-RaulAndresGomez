import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import '../../css/nav.css';


export default function CreateTalleresServicio() {
  let history = useHistory();
  const [nombre, setNombre] = useState('');
  const [marcaMotoAtienden, setMarcaMotoAtienden] = useState([]);
  const [direccion, setDireccion] = useState('');
  const [numeroTelefono, setNumeroTelefono] = useState('');
  const [horarioAtencion, setHorarioAtencion] = useState('');

  const postData = () => {
    axios
      .post(`http://localhost:7777/api/TalleresDeServicio`, {
        nombre,
        marca_moto_atienden: marcaMotoAtienden,
        direccion,
        numero_telefono: numeroTelefono,
        horario_atencion: horarioAtencion,
      })
      .then(() => {
        history.push('/readTalleresDeServicio');
      })
      .catch((error) => {
        console.error('Error al crear el taller de servicio:', error);
      });
  };

  return (
    <div>
      <h1>Crear Taller de Servicio</h1>
      <Form className="create-form">
        <Form.Field>
          <label>Nombre</label>
          <input
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Marcas de motos que atienden (separadas por comas)</label>
          <input
            placeholder="Marcas de motos que atienden"
            value={marcaMotoAtienden.join(',')}
            onChange={(e) =>
              setMarcaMotoAtienden(e.target.value.split(','))
            }
          />
        </Form.Field>
        <Form.Field>
          <label>Dirección</label>
          <input
            placeholder="Dirección"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Número de Teléfono</label>
          <input
            placeholder="Número de Teléfono"
            value={numeroTelefono}
            onChange={(e) => setNumeroTelefono(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Horario de Atención</label>
          <input
            placeholder="Horario de Atención"
            value={horarioAtencion}
            onChange={(e) => setHorarioAtencion(e.target.value)}
          />
        </Form.Field>
        <Button type="submit" onClick={postData}>
          Crear Taller de Servicio
        </Button>
      </Form>
    </div>
  );
}
