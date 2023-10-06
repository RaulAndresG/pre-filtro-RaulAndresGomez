import axios from 'axios';
import '../../css/nav.css';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default function ReadVentas() {
  const [ventasData, setVentasData] = useState([]);

  useEffect(() => {
     axios
      .get('http://localhost:7777/api/Ventas')
      .then((response) => {
        setVentasData(response.data);
      });
  }, []);

const setData = (data) => {
    localStorage.setItem('ID', data._id);
   /*  localStorage.setItem('ModeloMotoID', data.modelo_moto._id); */
/*     localStorage.setItem('MarcaModelo', `${data.modelo_moto.marca} ${data.modelo_moto.modelo}`); */
    localStorage.setItem('AnioVenta', data.anio_venta);
    localStorage.setItem('CantidadVendida', data.cantidad_vendida);
    localStorage.setItem('PrecioPromedioVenta', data.precio_promedio_venta);
  };

  const getData = () => {
    axios.get(`http://localhost:7777/api/Ventas`).then((getData) => {
      setVentasData(getData.data);
    });
  };


  const onDelete = (_id) => {
    axios
      .delete(`http://localhost:7777/api/Ventas/${_id}`)
      .then(() => {
        getData();
      })
      .catch((error) => {
        console.error('Error al eliminar la venta:', error);
      });
  };

  
  return (
    <div>
 <nav className="nav">
  <h1>Ventas</h1>
  <img className="imagen"  />
  <a>
    <Link className="a" to="/readAccesorios">
      Accesorios
    </Link>
  </a>
  <a>
    <Link className="a" to="/readComentarios">
      Comentarios
    </Link>
  </a>
  <a>
    <Link className="a" to="/readEspecificaciones">
      Especificaciones
    </Link>
  </a>
  <a>
    <Link className="a" to="/readEventos">
      Eventos
    </Link>
  </a>
  <a>
    <Link className="a" to="/readMarcas">
      Marcas
    </Link>
  </a>
  <a>
    <Link className="a" to="/readMotos">
      Motos
    </Link>
  </a>
  <a>
    <Link className="a" to="/readTalleresDeServicio">
      TalleresDeServicio
    </Link>
  </a>
  <a>
    <Link className="a" to="/readVentas">
      Ventas
    </Link>
  </a>
</nav>

      <Table className='Table' singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="border-header-derecha ">Modelo Moto</Table.HeaderCell>
            <Table.HeaderCell className="small-header">Año de Venta</Table.HeaderCell>
            <Table.HeaderCell className="small-header">Cantidad Vendida</Table.HeaderCell>
            <Table.HeaderCell className="small-header">Actualizar</Table.HeaderCell>
            <Table.HeaderCell className="border-header-izquierda">Eliminar</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {ventasData.map((data) => (
            <Table.Row key={data._id.$oid}>
              
{/*               <Table.Cell className="casilla">{`${data.modelo_moto.marca} ${data.modelo_moto.modelo}`}</Table.Cell> */}
              <Table.Cell className="casilla">{data.anio_venta}</Table.Cell>
              <Table.Cell className="casilla">{data.cantidad_vendida}</Table.Cell>
              <Table.Cell className="casilla">{data.precio_promedio_venta}</Table.Cell>

                <Table.Cell>
                <Link to="/updateVentas">
                  <Button className='boton' onClick={() => setData(data)}>
                    Actualizar
                  </Button>
                </Link>
                </Table.Cell>

                <Table.Cell>
                <Button className='boton' onClick={() => onDelete(data._id)}>
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