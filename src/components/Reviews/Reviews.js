import React from 'react';
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
                        review={review}>

                    </Review>)
                }


            </div>

        </div>
    );
};

export default Reviews;