import React from 'react';

const Review = (props) => {
    const { name, picture, review, rating } = props.review;
    return (
        <div >
            <div className='p-9' >
                <div className='flex items-center gap-4'>
                    <img className='rounded-full' width='80px' src={picture} alt="" />
                    <h1 className='text-xl font-bold text-violet-900'>{name}</h1>
                </div>
                <p className='text-gray-500 '>{review}</p>
                <p className='text-cyan-500 font-bold'>Ratings: {rating} star</p>
            </div>
        </div>
    );
};

export default Review;