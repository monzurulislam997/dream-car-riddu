import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../hooks/useReviews';
import Review from '../Review/Review';


const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='m-24'>

            <div className='grid grid-cols-2' >


                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}></Review>)
                }


            </div>
            <button className='border py-1 px-4 bg-teal-600 rounded-md hover:bg-indigo-600 text-white font-bold '>

                <Link to="/reviews"> See All Reviews</Link>
            </button>
        </div>
    );
};

export default Reviews;