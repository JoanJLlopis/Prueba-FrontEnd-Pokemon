import React, { useEffect, useState } from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend, 
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    indexAxis: 'y' ,
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            labels: 'false',
        },
    },
    scales:{
        x:{
            min: 0,
            max: 255,
            border:{
                display:false
            },
            grid:{
                display: false
            },
            ticks:{
                display:false
            }
        },
        y:{
            border:{
                display:false
            },
            grid:{
                display: false
            }
        }
    },
    barThickness: 6,
};

const labels = ['HP', 'Atk', 'Dfs', 'SAtk', 'SDfs', 'Spd'];
const scores = [10,20,30,40,50,60]

const StatsBar = ({stats}) => {
    const [baseStats,setBaseStats] = useState([]);
    
    useEffect(()=>{
        stats?.map((stat)=>{
            baseStats.push(stat.base_stat)
        })
            console.log("🚀 ~ file: StatsBar.component.jsx:73 ~ stats?.map ~ baseStats", baseStats)
    },[baseStats])

    const data = {
        labels,
        datasets: [
        {
            data: baseStats,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgb(255, 99, 132)',
        },
        ],
    };


    return (
        <div>
            <Bar options={options} data={data}/>
        </div>
    );
};

export default StatsBar;