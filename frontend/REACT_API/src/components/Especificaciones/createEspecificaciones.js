import React, { useState } from "react";
import { Button, Form } from 'semantic-ui-react';
import axios from "axios";
import { useHistory } from "react-router";
import '../../css/nav.css';



export default function CreateEspecificaciones() {
  let history = useHistory();
  const [potencia, setPotencia] = useState('');
  const [torque, setTorque] = useState('');
  const [pesoSeco, setPesoSeco] = useState('');
  const [alturaAsiento, setAlturaAsiento] = useState('');
  const [tipoChasis, setTipoChasis] = useState('');
  const [suspensionDelantera, setSuspensionDelantera] = useState('');
  const [suspensionTrasera, setSuspensionTrasera] = useState('');
  const [frenosDelanteros, setFrenosDelanteros] = useState('');
  const [frenosTraseros, setFrenosTraseros] = useState('');
  const [neumaticos, setNeumaticos] = useState('');
  const [capacidadTanque, setCapacidadTanque] = useState('');
  const [aceleracion0_100, setAceleracion0_100] = useState('');

  const postData = () => {
    axios
    .post(`http://localhost:7777/api/Especificaciones`, {
      potencia,
      torque,
      peso_seco: pesoSeco,
      altura_asiento: alturaAsiento,
      tipo_chasis: tipoChasis,
      suspension_delantera: suspensionDelantera,
      suspension_trasera: suspensionTrasera,
      frenos_delanteros: frenosDelanteros,
      frenos_traseros: frenosTraseros,
      neumaticos,
      capacidad_tanque: capacidadTanque,
      aceleracion_0_100: aceleracion0_100
    }).then(() => {
      history.push('/readEspecificaciones');
    })
    .catch((error) => {
      console.error('Error al crear el elemento:', error);
    });
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Potencia</label>
          <input placeholder="Potencia" value={potencia} onChange={(e) => setPotencia(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Torque</label>
          <input placeholder="Torque" value={torque} onChange={(e) => setTorque(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Peso Seco</label>
          <input placeholder="Peso Seco" value={pesoSeco} onChange={(e) => setPesoSeco(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Altura del Asiento</label>
          <input placeholder="Altura del Asiento" value={alturaAsiento} onChange={(e) => setAlturaAsiento(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Tipo de Chasis</label>
          <input placeholder="Tipo de Chasis" value={tipoChasis} onChange={(e) => setTipoChasis(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Suspensión Delantera</label>
          <input placeholder="Suspensión Delantera" value={suspensionDelantera} onChange={(e) => setSuspensionDelantera(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Suspensión Trasera</label>
          <input placeholder="Suspensión Trasera" value={suspensionTrasera} onChange={(e) => setSuspensionTrasera(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Frenos Delanteros</label>
          <input placeholder="Frenos Delanteros" value={frenosDelanteros} onChange={(e) => setFrenosDelanteros(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Frenos Traseros</label>
          <input placeholder="Frenos Traseros" value={frenosTraseros} onChange={(e) => setFrenosTraseros(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Neumáticos</label>
          <input placeholder="Neumáticos" value={neumaticos} onChange={(e) => setNeumaticos(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Capacidad del Tanque</label>
          <input placeholder="Capacidad del Tanque" value={capacidadTanque} onChange={(e) => setCapacidadTanque(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Aceleración 0-100</label>
          <input placeholder="Aceleración 0-100" value={aceleracion0_100} onChange={(e) => setAceleracion0_100(e.target.value)} />
        </Form.Field>
        <Button type="submit" onClick={postData}>Crear</Button>
      </Form>
    </div>
  );
}
