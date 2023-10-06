import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';
import '../../css/nav.css';


export default function UpdateTalleresServicio() {
  let history = useHistory();
  const [_id, setID] = useState(null);
  const [nombre, setNombre] = useState('');
  const [marcaMotoAtienden, setMarcaMotoAtienden] = useState('');
  const [direccion, setDireccion] = useState('');
  const [numeroTelefono, setNumeroTelefono] = useState('');
  const [horarioAtencion, setHorarioAtencion] = useState('');

  useEffect(() => {
    setID(localStorage.getItem('ID'));
    setNombre(localStorage.getItem('Nombre'));
    setMarcaMotoAtienden(localStorage.getItem('MarcaMotoAtienden'));
    setDireccion(localStorage.getItem('Direccion'));
    setNumeroTelefono(localStorage.getItem('NumeroTelefono'));
    setHorarioAtencion(localStorage.getItem('HorarioAtencion'));
  }, []);

  const updateAPIData = () => {
    axios
      .put(`http://localhost:7777/api/TalleresDeServicio/${_id}`, {
        nombre,
        marca_moto_atienden: marcaMotoAtienden.split(',').map((marca) => marca.trim()),
        direccion,
        numero_telefono: numeroTelefono,
        horario_atencion: horarioAtencion,
      })
      .then(() => {
        history.push('/readTalleresServicio');
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
          <label>Marca de motos que atienden (separadas por comas)</label>
          <input
            placeholder="Marca de motos que atienden"
            value={marcaMotoAtienden}
            onChange={(e) => setMarcaMotoAtienden(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Dirección</label>
          <input
            placeholder="Dirección"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Número de Teléfono</label>
          <input
            placeholder="Número de Teléfono"
            value={numeroTelefono}
            onChange={(e) => setNumeroTelefono(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Horario de Atención</label>
          <input
            placeholder="Horario de Atención"
            value={horarioAtencion}
            onChange={(e) => setHorarioAtencion(e.target.value)}
          ></input>
        </Form.Field>
        <Button type="submit" onClick={updateAPIData}>
          ACTUALIZAR
        </Button>
      </Form>
    </div>
  );
}
