import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from "../components/Navbar";
import 'fontsource-roboto';
import '../assets/css/Dashboard.css';
import StoreIcon from '@material-ui/icons/Store';
import PublicIcon from '@material-ui/icons/Public';
import InstagramIcon from '@material-ui/icons/Instagram';
import CardsHeader from '../components/CardsHeader';
import Cards from '../components/Cards';
import Graphics from '../components/Graphics';
import TableMaterial from '../components/TableMaterial';
import Footer from '../components/Footer';
import Graphics1 from '../components/Graphics1';
import axios from 'axios'
import Graphics2 from '../components/Graphics2';


const useStyles = makeStyles(() => ({

  root: {
    flexGrow: 1
  },
  iconos: {
    color: 'white'
  },
  container: {
    paddingTop: '40px',
    alignItems: 'center',
  },
  containerGrafica: {
    marginTop: '40px'
  },
  containerTabla: {
    marginTop: '40px'
  },
  containerFooter: {
    marginTop: '40px',
    textAlign: 'center',
  }
}));

function Dashboard(props) {



  const [ordenes, setOrdenes] = useState([]);
  const [ventas, setVentas] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [productos, setProductos] = useState([]);
  const [totalproductos, setTotalProductos] = useState([]);



  const peticionApi = async () => {
    await axios.get('http://localhost:3040/api/totalventas')
      .then(response => {
        
        var respuesta = response.data.totalVentas;

        setVentas(respuesta);
      })
  }

  const peticionApi1 = async () => {
    await axios.get('http://localhost:3040/api/totalordenes')
      .then(response => {
        
        var respuesta = response.data.totalOrdenes;

        setOrdenes(respuesta);
      })
  }

  const peticionApi2 = async () => {
    await axios.get('http://localhost:3040/api/totalusuarios')
      .then(response => {
      
        var respuesta = response.data;

        setUsuarios(respuesta);
      })
  }

  const peticionApi3 = async () => {
    await axios.get('http://localhost:3040/api/productomasvendido')
      .then(response => {
        
        var respuesta = response.data.productoMasVendido;
        var arregloProductos = []
        respuesta.map(elemento => {
          arregloProductos.push(elemento)

        });
        setProductos(arregloProductos);

      })
  }

  const peticionApi4 = async () => {
    await axios.get('http://localhost:3040/api/totalproductos')
      .then(response => {
        console.log('totalPpp', response.data.totalProductos)
        var respuesta = response.data.totalProductos;

        setTotalProductos(respuesta);
      })
  }
  useEffect(() => {
    peticionApi()
    peticionApi1();
    peticionApi2();
    peticionApi3();
    peticionApi4();
  }, [])


  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>

        <Grid item xs={12}>
          <Navbar />
        </Grid>

        <Grid container spacing={1} className={classes.container} xs={12} sm={12} md={6} lg={6} xl={6}>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Cards titulo="TOTAL VENTAS 2023" texto={Intl.NumberFormat().format(ventas)} />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Cards titulo="TOTAL ORDENES 2023" texto={ordenes} />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Cards titulo="TOTAL USUARIOS 2023" texto={usuarios} />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Cards titulo="TIPOS DE PRODUCTO 2023" texto={totalproductos} />
          </Grid>


        </Grid>

        <Grid item xs={0} sm={0} md={1} lg={1} xl={1}></Grid>



        <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className={classes.containerGrafica}>
          <Graphics1 />

        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className={classes.containerGrafica}>
          <Graphics />

        </Grid>

        <Grid item xs={0} sm={0} md={1} lg={1} xl={1}></Grid>

        <Grid item xs={0} sm={0} md={1} lg={1} xl={1}></Grid>

        <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className={classes.containerGrafica}>
          <Graphics2 />

        </Grid>



        <Grid item xs={12} className={classes.containerTabla}>
          <TableMaterial data={productos} />
        </Grid>


      </Grid>
      <Grid container className={classes.container} item xs={12}>
        <Footer />
      </Grid>
    </div>

  );
}

export default Dashboard;