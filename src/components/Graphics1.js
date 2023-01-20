import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios'
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js'
import '../assets/css/Graphics.css';




function Graphics1(props) {
    /*
    let estado = useState()
    let valoresEstado = estado[0]
    let setValoresEstado = estado[1]
    useEffect (()=>{
        fetch('http://localhost:3040/api/ventaspormes')
        .then(response => response.json())
        .then(data => {
          setValoresEstado(data.ventasPorMes)
          console.log('graphics',data.ventasPorMes)
        }) 
    },[])*/

    const [dias, setDias] = useState([]);
    const [ventas, setVentas] = useState([]);


    const data = {

        labels: dias,
        datasets: [
            {
                label: 'Ventas Por Dia',
                fill: false,
                backgroundColor: '#9D752B',
                borderColor: '#9D752B',
                pointBorderColor: '#9D752B',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#D989B5',
                pointHoverBorderColor: '#D989B5',
                pointRadius: 1,
                pointHitRadius: 10,
                data: ventas
            }
        ]
    }

    const peticionApi = async () => {
        await axios.get('http://localhost:3040/api/ventaspordia')
            .then(response => {
               
                var respuesta = response.data.ventasPorDia;
                var arregloDias = []
                var arregloVentas = []
                respuesta.map(elemento => {
                    arregloDias.push(elemento.dia)
                    arregloVentas.push(elemento.total)
                });
                setDias(arregloDias);
                setVentas(arregloVentas);
            })
    }

    useEffect(() => {
        peticionApi();
    }, [])


    return (
        <div className="containerGrafica">
            <Bar data={data} />
        </div>
    );
}

export default Graphics1;