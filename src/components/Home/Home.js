import React from 'react';
import car from '../../images/car.jpg';
import useReviews from '../hooks/useReviews';
import './Home.css'
import Review from './../Review/Review';
import { Link } from 'react-router-dom';
const Home = () => {
    const [reviews, setReviews] = useReviews()
    return (
        <div >
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
            <h1 className='text-3xl text-center mt-16 font-bold'>Customer Reviews {reviews.length}</h1>

            <div className='grid grid-cols-2 mx-24'>
                {
                    reviews.slice(0, 3).map(review => <Review
                        key={review._id}
                        review={review}>

                    </Review>)
                }
            </div>
            <button className='border py-1 px-4 bg-teal-600 rounded-md hover:bg-indigo-600 text-white font-bold '>

                <Link to="/reviews"> See All Reviews</Link>
            </button>
        </div>

    );
};

export default Home;