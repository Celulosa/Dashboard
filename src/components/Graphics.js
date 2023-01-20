import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios'
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js'
import '../assets/css/Graphics.css';




function Graphics(props) {
    

    const [meses, setMeses] = useState([]);
    const [ventas, setVentas] = useState([]);


    const data = {

        labels: meses,
        datasets: [
            {
                label: 'Ventas Por Mes',
                fill: false,
                backgroundColor: '#674273',
                borderColor: '#674273',
                pointBorderColor: '#674273',
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
        await axios.get('http://localhost:3040/api/ventaspormes')
            .then(response => {
                
                var respuesta = response.data.ventasPorMes;
                var arregloMeses = []
                var arregloVentas = []
                respuesta.map(elemento => {
                    arregloMeses.push(elemento.mes)
                    arregloVentas.push(elemento.totalPorMes)
                });
                setMeses(arregloMeses);
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

export default Graphics;