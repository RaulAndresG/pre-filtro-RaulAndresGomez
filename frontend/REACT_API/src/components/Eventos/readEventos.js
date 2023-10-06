import axios from 'axios';
import '../../css/nav.css';
import logo1 from '../../css/logo1.png';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function ReadEventos() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:7777/api/Eventos`).then((response) => {
      console.log(response.data);
      setAPIData(response.data);
    });
  }, []);

  const setData = (data) => {
    let { _id, nombre, fecha_lugar, descripcion, marcas_modelos_destacados } = data;
    localStorage.setItem('ID', _id);
    localStorage.setItem('Nombre', nombre);
    localStorage.setItem('FechaLugar', fecha_lugar);
    localStorage.setItem('Descripcion', descripcion);
    localStorage.setItem(
      'MarcasModelosDestacados',
      marcas_modelos_destacados.join(', ')
    );
  };

  const getData = () => {
    axios.get(`http://localhost:7777/api/Eventos`).then((getData) => {
      setAPIData(getData.data);
    });
  };

  const onDelete = (_id) => {
    axios
      .delete(`http://localhost:7777/api/Eventos/${_id}`)
      .then(() => {
        getData();
      })
      .catch((error) => {
        console.error('Error al eliminar el evento:', error);
      });
  };

  return (
    <div>
      <nav className="nav">
        <h1>Gestion Empresarial</h1>
        <img className="imagen" src={logo1} alt="Descripción de la imagen" />
        <a>
          <Link className="a" to="/readClientes">
            Clientes
          </Link>
        </a>
        <a>
          <Link className="a" to="/readInventario">
            Inventario
          </Link>
        </a>
        <a>
          <Link className="a" to="/read">
            Empleados
          </Link>
        </a>
        <a>
          <Link className="a" to="/readProyectos">
            Proyectos
          </Link>
        </a>
        <a>
          <Link className="a" to="/readEmpresas">
            Empresas
          </Link>
        </a>
        <a>
          <Link className="a" to="/readUsuarios">
            Usuarios
          </Link>
        </a>
        <a>
          <Link className="a" to="/readEventos">
            Eventos
          </Link>
        </a>
      </nav>
      <Table className="Table" singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="small-header">Nombre</Table.HeaderCell>
            <Table.HeaderCell className="small-header">
              Fecha y Lugar
            </Table.HeaderCell>
            <Table.HeaderCell className="small-header">Descripción</Table.HeaderCell>
            <Table.HeaderCell className="small-header">
              Marcas y Modelos Destacados
            </Table.HeaderCell>
            <Table.HeaderCell className="small-header">Actualizar</Table.HeaderCell>
            <Table.HeaderCell className="small-header">Eliminar</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {APIData.map((data) => (
            <Table.Row key={data._id}>
              <Table.Cell className="casilla">{data.nombre}</Table.Cell>
              <Table.Cell className="casilla">{data.fecha_lugar}</Table.Cell>
              <Table.Cell className="casilla">{data.descripcion}</Table.Cell>
              <Table.Cell className="casilla">
                {data.marcas_modelos_destacados.join(', ')}
              </Table.Cell>
              <Table.Cell>
                <Link to="/updateEventos">
                  <Button className="boton" onClick={() => setData(data)}>
                    Update
                  </Button>
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Button className="boton" onClick={() => onDelete(data._id)}>
                  Eliminar
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
