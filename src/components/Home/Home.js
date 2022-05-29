import React from 'react';
import car from '../../images/car.jpg';
import './Home.css'
const Home = () => {
    return (
        <div className='home-container'>
            <div className='home-heading'>
                <h1>Bugatti Will Be Yours</h1>
                <h1>Just For $3.2 Milion!! </h1>
            </div>
            <div className='img-container'>
                <img src={car} alt="" />
            </div>
        </div>
    );
};

export default Home;