import React, { useState, useEffect } from 'react';
import { Button, Form, Checkbox } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';
import '../../css/nav.css';


export default function UpdateMotos() {
  let history = useHistory();
  const [_id, setID] = useState(null);
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [cilindraje, setCilindraje] = useState(0);
  const [anio, setAnio] = useState(0);
  const [precio, setPrecio] = useState(0);
  const [tipoMotor, setTipoMotor] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagenes, setImagenes] = useState([]);
  const [comentarios, setComentarios] = useState([]);
  const [checkbox, setCheckbox] = useState(false);

  useEffect(() => {
    setID(localStorage.getItem('ID'));
    setMarca(localStorage.getItem('Marca'));
    setModelo(localStorage.getItem('Modelo'));
    setCilindraje(parseInt(localStorage.getItem('Cilindraje'), 10));
    setAnio(parseInt(localStorage.getItem('Anio'), 10));
    setPrecio(parseFloat(localStorage.getItem('Precio')));
    setTipoMotor(localStorage.getItem('TipoMotor'));
    setDescripcion(localStorage.getItem('Descripcion'));
    setImagenes(JSON.parse(localStorage.getItem('Imagenes')) || []);
    setComentarios(JSON.parse(localStorage.getItem('Comentarios')) || []);
  }, []);

  const updateAPIData = () => {
    axios
      .put(`http://localhost:7777/api/Motos/${_id}`, {
        marca,
        modelo,
        cilindraje,
        anio,
        precio,
        tipo_motor: tipoMotor,
        descripcion,
        imagenes,
        comentarios,
        checkbox,
      })
      .then(() => {
        history.push('/readMotos');
      });
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Marca</label>
          <input
            placeholder="Marca"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Modelo</label>
          <input
            placeholder="Modelo"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Cilindraje</label>
          <input
            type="number"
            placeholder="Cilindraje"
            value={cilindraje}
            onChange={(e) => setCilindraje(parseInt(e.target.value, 10))}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Año</label>
          <input
            type="number"
            placeholder="Año"
            value={anio}
            onChange={(e) => setAnio(parseInt(e.target.value, 10))}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Precio</label>
          <input
            type="number"
            placeholder="Precio"
            value={precio}
            onChange={(e) => setPrecio(parseFloat(e.target.value))}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Tipo de Motor</label>
          <input
            placeholder="Tipo de Motor"
            value={tipoMotor}
            onChange={(e) => setTipoMotor(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Descripción</label>
          <textarea
            placeholder="Descripción"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          ></textarea>
        </Form.Field>
        <Form.Field>
          <label>Imágenes (separadas por comas)</label>
          <input
            placeholder="Imágenes (separadas por comas)"
            value={imagenes.join(', ')}
            onChange={(e) => setImagenes(e.target.value.split(', '))}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Comentarios (separados por comas)</label>
          <input
            placeholder="Comentarios (separados por comas)"
            value={comentarios.join(', ')}
            onChange={(e) => setComentarios(e.target.value.split(', '))}
          ></input>
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Acepto los términos y condiciones"
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
