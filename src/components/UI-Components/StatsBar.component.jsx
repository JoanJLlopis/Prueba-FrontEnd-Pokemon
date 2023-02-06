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

const StatsBar = ({stats}) => {

    const data = {
        labels,
        datasets: [
        {
            data: stats,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgb(255, 99, 132)',
        },
        ],
    }
        
    return (
        <div>
            <Bar options={options} data={data}/>
        </div>
    );
};

export default StatsBar;