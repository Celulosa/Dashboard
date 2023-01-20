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
const data1 = []
const data = [
  {
    id: 1,
    producto:
      "Cartera Khalo",
    fecha: "1 de ene. 2023",
    Id: 3,
    imagen: require("../assets/img/Khalo2.png"),
  },
  {
    id: 2,
    producto:
      "Conjunto Primavera",
    fecha: "1 de ene. 2023",
    Id: 1,
    imagen: require("../assets/img/ConjuntoPrimavera.jpeg"),
  },
  {
    id: 3,
    producto:
      "Top Perla",
    fecha: "1 de ene. 2023",
    Id: 2,
    imagen: require("../assets/img/top-perla1.jpg"),
  },
];

function Dashboard(props) {

  /*let estado = useState()
  let valoresEstado = estado[0]
  let setValoresEstado = estado[1]
  useEffect (()=>{
      fetch('http://localhost:3040/api/totalventas')
      .then(response => response.json())
      .then(data => {
        setValoresEstado(data.totalVentas)
        console.log(data)
      }) 
  },[])*/

  const [ordenes, setOrdenes] = useState([]);
  const [ventas, setVentas] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [productos, setProductos] = useState([]);
 console.log('ppp',productos)
  /* const data = {

       orden: ordenes,
       venta: ventas
   }*/

  const peticionApi = async () => {
    await axios.get('http://localhost:3040/api/totalventas')
      .then(response => {
        console.log('grafic1', response.data.totalVentas)
        var respuesta = response.data.totalVentas;

        setVentas(respuesta);
      })
  }

  const peticionApi1 = async () => {
    await axios.get('http://localhost:3040/api/totalordenes')
      .then(response => {
        console.log('grafic1', response.data.totalOrdenes)
        var respuesta = response.data.totalOrdenes;

        setOrdenes(respuesta);
      })
  }

  const peticionApi2 = async () => {
    await axios.get('http://localhost:3040/api/totalusuarios')
      .then(response => {
        console.log('grafic1usuarios', response.data)
        var respuesta = response.data;

        setUsuarios(respuesta);
      })
  }

  const peticionApi3 = async () => {
    await axios.get('http://localhost:3040/api/productomasvendido')
      .then(response => {
        console.log('grafic1', response.data.productoMasVendido)
        var respuesta = response.data.productoMasVendido;
        var arregloProductos = []
        respuesta.map(elemento => {
          arregloProductos.push(elemento)

        });
        setProductos(arregloProductos);

      })
  }

  useEffect(() => {
    peticionApi()
    peticionApi1();
    peticionApi2();
    peticionApi3();
  }, [])
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>

        <Grid item xs={12}>
          <Navbar />
        </Grid>


        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader icono={<StoreIcon className={classes.iconos} />} titulo="TIENDA" texto="Khalo Store" color="#c7b5a7" font="black" />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader icono={<PublicIcon className={classes.iconos} />} titulo="PAÍS" texto="Colombia" color="#c7b5a7" font="black" />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader icono={<InstagramIcon className={classes.iconos} />} titulo="@khaloo.Store" texto="@panvezu" color="#c7b5a7" font="black" />
        </Grid>


        <Grid container spacing={1} className={classes.container} xs={12} sm={12} md={6} lg={6} xl={6}>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Cards titulo="TOTAL VENTAS 2023" texto={ventas} />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Cards titulo="TOTAL ORDENES 2023" texto={ordenes} />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Cards titulo="TOTAL USUARIOS 2023" texto={usuarios} />
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