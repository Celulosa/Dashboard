import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios'
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js'
import '../assets/css/Graphics.css';




function Graphics2(props) {
    const [meses, setMeses] = useState([]);
    const [usuarios, setUsuarios] = useState([]);

    
    const data = {

        labels: meses,
        datasets: [
            {
                label: 'Usuarios Por Mes',
                fill: false,
                backgroundColor: '#62929E',
                borderColor: '#62929E',
                pointBorderColor: '#62929E',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#D989B5',
                pointHoverBorderColor: '#D989B5',
                pointRadius: 1,
                pointHitRadius: 10,
                data: usuarios
            }
        ]
    }

    const peticionApi = async () => {
        await axios.get('http://localhost:3040/api/usuariospormes')
            .then(response => {
                
                var respuesta = response.data.usuariosPorMes;
                var arregloMeses = []
                var arregloUsuarios = []
                respuesta.map(elemento => {
                    arregloMeses.push(elemento.mes)
                    arregloUsuarios.push(elemento.usuarios)
                });
                setMeses(arregloMeses);
                setUsuarios(arregloUsuarios);
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

export default Graphics2;