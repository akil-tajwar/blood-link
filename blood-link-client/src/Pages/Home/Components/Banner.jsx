import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='bg-[url(banner.jpg)] bg-cover bg-center text-center min-h-screen'>
            <div className='flex justify-center items-center min-h-screen'>
                <div className='lg:w-full w-11/12 m-auto'>
                    <h1 className='lg:text-6xl text-4xl font-semibold text-[#f04d4d]'>Donate Blood</h1>
                    <h3 className='lg:text-4xl text-2xl font-semibold'>And Save lives</h3>
                    <p className='lg:w-1/2 w-11/12 mx-auto pt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe fugiat, tenetur quasi at perspiciatis ex inventore veritatis? Sed dolorem amet pariatur deleniti totam! Deleniti omnis doloribus iste excepturi iusto hic, aliquam enim. Maxime eligendi ad repudiandae. Eum dolorem quae suscipit amet quo! Sequi officiis consequuntur sunt, autem minus harum cum?</p>
                    <Link to={'/login'}><button className='bg-[#f04d4d] font-semibold text-white mt-5 px-4 pt-1 pb-2 lg:text-2xl text-lg rounded-full'>Donate Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;