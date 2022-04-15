import React from 'react'
import Logo from '../../components/ui/Logo';
import main from '../../assets/images/main.svg'
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <main>
            <nav className='max-w-7xl w-[90vw] flex items-center mx-auto h-24'>
                <Logo />
            </nav>

            {/* Info */}
            <div className='custom-container grid grid-cols-1 lg:grid-cols-2 lg:gap-48 items-center -mt-12 min-height'>

                <div className='flex flex-col'>
                    {/* Title */}
                    <h1 className='font-bold'>
                        Job <span className='text-sky-500'>Tracking</span> App
                    </h1>
                    {/* Description */}
                    <p className='text-gray-700'>
                        I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue bottle single-origin coffee chia.
                        Aesthetic post-ironic venmo, quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch narwhal.
                    </p>
                    <Link to="/register" className='cursor-pointer text-white bg-sky-600 border-transparent rounded-md px-[20px] py-[8px] text-lg inline-block max-w-max shadow-lg hover:shadow-2xl hover:bg-sky-800 transition'>
                        Login/Register
                    </Link>

                </div>

                <img src={main} alt="landing" className='hidden lg:block lg:object-cover lg:w-full ' />

            </div>
        </main>
    )
}

export default LandingPage