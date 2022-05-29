import React from 'react';
import car from '../../images/car.jpg';
import './Home.css'
const Home = () => {
    return (
        <div className='home-container'>
            <div className='home-heading mt-24'>
                <h1 className='text-6xl font-bold text-violet-800 '>BUGATTI Will Be Yours</h1>
                <h1 className='text-6xl font-bold '>Just For $3.2 Milion!! </h1>
                <p className='text-gray-800 font-semibold mt-4 p-6'>Life is one.Money is temporary.Don't be miser.Just Full-Fill your dream.Developed with learnings from both the 300+ and the Pur Sport, the Super Sport is the Chiron lineup's tour de force.</p>
            </div>
            <div className='img-container'>
                <img src={car} alt="" />
            </div>
        </div>
    );
};

export default Home;