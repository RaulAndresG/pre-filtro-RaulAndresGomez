import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form, } from 'semantic-ui-react';
import axios from "axios";
import { useHistory } from "react-router";

export default function Update() {
  let history = useHistory();
  const [_id, setID] = useState(null);
  const [nombre, setName] = useState('');
  const [descripcion, setDes] = useState('');
  useEffect(()=>{
    setID(localStorage.getItem('ID'));
    setName(localStorage.getItem('descripcion '));
    setDes(localStorage.getItem('Precio'));

},[]);

const updateAPIData = ()=>{
  axios.put(`http://localhost:7777/api/Accesorios/${_id}`,
  {
      nombre,
      descripcion,
  }
  ).then(()=>{
    history.push('/read');
  })
}

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Nombre</label>
          <input placeholder="Nombre" value={nombre} onChange={(e) => setName(e.target.value)} ></input>
        </Form.Field>
        <Form.Field>
          <label>Descripcion</label>
          <input placeholder="Apellido" value={descripcion} onChange={(e) => setDes(e.target.value)} ></input>
        </Form.Field>
        <Form.Field>
        </Form.Field>
        <Button type="submit" onClick={updateAPIData}>ACTUALIZAR</Button>
      </Form>
    </div>
  );
}