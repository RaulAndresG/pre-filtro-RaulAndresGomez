import React, { useState, useEffect } from "react";
import { Button,  Form } from 'semantic-ui-react';
import axios from "axios";
import { useHistory } from "react-router";
import '../../css/nav.css';
 

 export default function UpdateAccesorios() {
  let history = useHistory();
  const [_id, setID] = useState(null);
  const [nombre, setnombre] = useState('');
  const [descripcion, setdescripcion] = useState('');
  const [precio, setprecio] = useState(0);
/*   const [modelo_moto_compatible, setmodelo_moto_compatible] = useState(0); */

    useEffect(() => {
    setID(localStorage.getItem('ID'));
    setnombre(localStorage.getItem('nombre'));
    setdescripcion(localStorage.getItem('descripcion'));
    setprecio(parseInt(localStorage.getItem('precio')));
/*     setmodelo_moto_compatible(localStorage.getItem('modelo_moto_compatible').split(', ')); */
  }, []);


 const updateAPIData = () => {
  axios.put(`http://localhost:7777/api/Accesorios/${_id}`, {
    nombre,
    descripcion,
    precio,
  }).then(() => {
    history.push('/readAccesorios');
  }).catch((error) => {
    console.error("Error en la solicitud:", error);
  });
  
  };
 
 return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Nombre</label>
          <input placeholder="nombre" value={nombre} onChange={(e) => setnombre(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>descripcion</label>
          <input placeholder="descripcion" value={descripcion} onChange={(e) => setdescripcion(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>precio</label>
          <input type="number" placeholder="precio" value={precio} onChange={(e) => setprecio(e.target.value)} />
        </Form.Field>
{/*         <Form.Field>
          <label>Modelo Moto</label>
          <input placeholder="Modelo Moto" value={modeloMoto} onChange={(e) => setModeloMoto(e.target.value)} />
        </Form.Field> */}

        <Button type="submit" onClick={updateAPIData}>ACTUALIZAR</Button>
      </Form>
    </div>
  );
}