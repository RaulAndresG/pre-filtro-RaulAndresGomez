import React, { useState, useEffect } from 'react';
import { Button, Form, Checkbox } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function UpdateEspecificaciones() {
  let history = useHistory();
  const [_id, setID] = useState(null);
  const [modeloMoto, setModeloMoto] = useState('');
  const [potencia, setPotencia] = useState(0);
  const [torque, setTorque] = useState(0);
  const [pesoSeco, setPesoSeco] = useState(0);
  const [alturaAsiento, setAlturaAsiento] = useState(0);
  const [tipoChasis, setTipoChasis] = useState('');
  const [suspensionDelantera, setSuspensionDelantera] = useState('');
  const [suspensionTrasera, setSuspensionTrasera] = useState('');
  const [frenosDelanteros, setFrenosDelanteros] = useState('');
  const [frenosTraseros, setFrenosTraseros] = useState('');
  const [neumaticos, setNeumaticos] = useState('');
  const [capacidadTanque, setCapacidadTanque] = useState(0);
  const [aceleracion0100, setAceleracion0100] = useState(0);

  useEffect(() => {
    setID(localStorage.getItem('ID'));
    setModeloMoto(localStorage.getItem('ModeloMoto') || '');
    setPotencia(localStorage.getItem('Potencia') || 0);
    setTorque(localStorage.getItem('Torque') || 0);
    setPesoSeco(localStorage.getItem('PesoSeco') || 0);
    setAlturaAsiento(localStorage.getItem('AlturaAsiento') || 0);
    setTipoChasis(localStorage.getItem('TipoChasis') || '');
    setSuspensionDelantera(localStorage.getItem('SuspensionDelantera') || '');
    setSuspensionTrasera(localStorage.getItem('SuspensionTrasera') || '');
    setFrenosDelanteros(localStorage.getItem('FrenosDelanteros') || '');
    setFrenosTraseros(localStorage.getItem('FrenosTraseros') || '');
    setNeumaticos(localStorage.getItem('Neumaticos') || '');
    setCapacidadTanque(localStorage.getItem('CapacidadTanque') || 0);
    setAceleracion0100(localStorage.getItem('Aceleracion0100') || 0);
  }, []);

  const updateAPIData = () => {
    axios.put(`http://localhost:7777/api/Especificaciones/${_id}`, {
      modelo_moto: modeloMoto,
      potencia: parseFloat(potencia),
      torque: parseFloat(torque),
      peso_seco: parseFloat(pesoSeco),
      altura_asiento: parseFloat(alturaAsiento),
      tipo_chasis: tipoChasis,
      suspension_delantera: suspensionDelantera,
      suspension_trasera: suspensionTrasera,
      frenos_delanteros: frenosDelanteros,
      frenos_traseros: frenosTraseros,
      neumaticos: neumaticos,
      capacidad_tanque: parseFloat(capacidadTanque),
      aceleracion_0_100: parseFloat(aceleracion0100),
    }).then(() => {
      history.push('/readEspecificaciones');
    });
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Modelo de Moto</label>
          <input
            placeholder="Modelo de Moto"
            value={modeloMoto}
            onChange={(e) => setModeloMoto(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Potencia</label>
          <input
            type="number"
            placeholder="Potencia"
            value={potencia}
            onChange={(e) => setPotencia(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Torque</label>
          <input
            type="number"
            placeholder="Torque"
            value={torque}
            onChange={(e) => setTorque(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Peso Seco</label>
          <input
            type="number"
            placeholder="Peso Seco"
            value={pesoSeco}
            onChange={(e) => setPesoSeco(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Altura de Asiento</label>
          <input
            type="number"
            placeholder="Altura de Asiento"
            value={alturaAsiento}
            onChange={(e) => setAlturaAsiento(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Tipo de Chasis</label>
          <input
            placeholder="Tipo de Chasis"
            value={tipoChasis}
            onChange={(e) => setTipoChasis(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Suspensión Delantera</label>
          <input
            placeholder="Suspensión Delantera"
            value={suspensionDelantera}
            onChange={(e) => setSuspensionDelantera(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Suspensión Trasera</label>
          <input
            placeholder="Suspensión Trasera"
            value={suspensionTrasera}
            onChange={(e) => setSuspensionTrasera(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Frenos Delanteros</label>
          <input
            placeholder="Frenos Delanteros"
            value={frenosDelanteros}
            onChange={(e) => setFrenosDelanteros(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Frenos Traseros</label>
          <input
            placeholder="Frenos Traseros"
            value={frenosTraseros}
            onChange={(e) => setFrenosTraseros(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Neumáticos</label>
          <input
            placeholder="Neumáticos"
            value={neumaticos}
            onChange={(e) => setNeumaticos(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Capacidad del Tanque</label>
          <input
            type="number"
            placeholder="Capacidad del Tanque"
            value={capacidadTanque}
            onChange={(e) => setCapacidadTanque(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Aceleración 0-100</label>
          <input
            type="number"
            placeholder="Aceleración 0-100"
            value={aceleracion0100}
            onChange={(e) => setAceleracion0100(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>

        </Form.Field>
        <Button type="submit" onClick={updateAPIData}>
          ACTUALIZAR
        </Button>
      </Form>
    </div>
  );
}
