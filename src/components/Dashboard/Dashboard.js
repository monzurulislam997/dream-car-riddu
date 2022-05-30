import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
// const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },];
const data = [
    {
        "month": "Mar",
        "investment": 100000,
        "sell": 241,
        "revenue": 10401
    },
    {
        "month": "Apr",
        "investment": 200000,
        "sell": 423,
        "revenue": 24500
    },
    {
        "month": "May",
        "investment": 500000,
        "sell": 726,
        "revenue": 67010
    },
    {
        "month": "Jun",
        "investment": 500000,
        "sell": 529,
        "revenue": 40405
    },
    {
        "month": "Jul",
        "investment": 600000,
        "sell": 601,
        "revenue": 50900
    },
    {
        "month": "Aug",
        "investment": 700000,
        "sell": 670,
        "revenue": 61000
    },
    {
        "month": "Sep",
        "investment": 900000,
        "sell": 870,
        "revenue": 71000
    }
]



const Dashboard = () => {





    return (

        <div className='px-24 grid grid-cols-2 mt-5'>
            <div >
                <h3 className='text-gray-500 text-xl font-bold font-bold text-center '>Monthly Wise Sell</h3>
                <LineChart width={400} height={400} data={data}>
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>

            <div>
                <h3 className='text-emerald-600 text-xl font-bold font-bold text-center '>Invest Vs Revenue</h3>
                <PieChart width={830} height={280}>
                    <Pie data={data} dataKey="investment" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#4A235A" />
                    <Pie data={data} dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#196F3D" label />
                    <Tooltip />
                </PieChart>
            </div>

            <div className='mt-5'>
                <h3 className='text-blue-500 text-xl font-bold font-bold text-center '>Invest vs Revenue</h3>
                <BarChart width={530} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="revenue" fill="#5B2C6F" />
                    <Bar dataKey="investment" fill="#229954" />
                </BarChart>
            </div>
        </div>

    );
};

export default Dashboard;


