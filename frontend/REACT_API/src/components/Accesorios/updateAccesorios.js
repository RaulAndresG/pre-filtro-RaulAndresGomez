import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Form } from 'semantic-ui-react';

export default function Accesorios() {
  const [accesorios, setAccesorios] = useState([]);
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    modelo_moto_compatible: [],
  });
  const [editingAccesorio, setEditingAccesorio] = useState(null);

  const { nombre, descripcion, precio, modelo_moto_compatible } = formData;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:7777/api/Accesorios'); 
      setAccesorios(response.data);
    } catch (error) {
      console.error('Error al obtener accesorios', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddAccesorio = async () => {
    try {
      if (editingAccesorio) {
        await axios.patch(
          `http://localhost:7777/api/Accesorios/${editingAccesorio._id}`,
          formData
        );
      } else {
        await axios.post('http://localhost:7777/api/Accesorios', formData);
      }
      fetchData();
      setFormData({
        nombre: '',
        descripcion: '',
        precio: '',
        modelo_moto_compatible: [],
      });
      setEditingAccesorio(null);
    } catch (error) {
      console.error('Error al agregar/actualizar accesorio', error);
    }
  };

  const handleDeleteAccesorio = async (id) => {
    try {
      await axios.delete(`http://localhost:7777/api/Accesorios/${id}`);
      fetchData();
    } catch (error) {
      console.error('Error al eliminar accesorio', error);
    }
  };

  const handleEditAccesorio = (id) => {
    const accesorioToEdit = accesorios.find((accesorio) => accesorio._id === id);
    if (accesorioToEdit) {
      setEditingAccesorio(accesorioToEdit);
      setFormData({
        nombre: accesorioToEdit.nombre,
        descripcion: accesorioToEdit.descripcion,
        precio: accesorioToEdit.precio,
        modelo_moto_compatible: accesorioToEdit.modelo_moto_compatible,
      });
    }
  };

  return (
    <div>
      <h1>Accesorios</h1>
      <Form>
        <Form.Field>
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Descripción</label>
          <input
            type="text"
            name="descripcion"
            value={descripcion}
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Precio</label>
          <input
            type="text"
            name="precio"
            value={precio}
            onChange={handleInputChange}
          />
        </Form.Field>
        {/* Añadir campos para modelo_moto_compatible (puede ser un campo de texto o una lista) */}
        <Button onClick={handleAddAccesorio}>
          {editingAccesorio ? 'Actualizar Accesorio' : 'Agregar Accesorio'}
        </Button>
      </Form>

      <div className="card-container">
        {accesorios.map((accesorio) => (
          <Card key={accesorio._id}>
            <Card.Content>
              <Card.Header>{accesorio.nombre}</Card.Header>
              <Card.Meta>{accesorio.precio} USD</Card.Meta>
              <Card.Description>{accesorio.descripcion}</Card.Description>
              {/* Mostrar otros detalles del accesorio */}
              {/* ... (como en el ejemplo anterior) */}
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button
                  basic
                  color="green"
                  onClick={() => handleEditAccesorio(accesorio._id)}
                >
                  Editar
                </Button>
                <Button
                  basic
                  color="red"
                  onClick={() => handleDeleteAccesorio(accesorio._id)}
                >
                  Eliminar
                </Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </div>
    </div>
  );
}
