import React from 'react'
import { Link } from 'react-router-dom';
import NotFound from '../assets/images/not-found.svg';

const Error = () => {
    return (
        <div className='flex justify-center items-center flex-col min-h-screen text-center'>
            <img src={NotFound} alt='not found' className='object-cover block max-w-[600px] mx-auto mb-8 ' />
            <h3>
                Ohh! Page Not Found
            </h3>
            <p className='mb-2 text-gray-700'>We can't seem to find the page you're looking for</p>
            <Link to='/' className='underline capitalize text-sky-500 font-medium text-lg leading-normal'>back home</Link>
        </div>
    )
}

export default Error