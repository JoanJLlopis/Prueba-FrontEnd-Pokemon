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
            max: 450,
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
    borderRadius: 25,
};

const labels = ['HP', 'Atk', 'Dfs', 'SAtk', 'SDfs', 'Spd'];

const StatsBar = ({stats}) => {

    const data = {
        labels,
        datasets: [
        {
            data: stats,
            borderColor: 'rgb(239 68 68)',
            backgroundColor: 'rgb(239 68 68)',
        },
        ],
    }
        
    return (
        <div className='w-50'>
            <Bar options={options} data={data}/>
        </div>
    );
};

export default StatsBar;