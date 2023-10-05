import React from 'react';
import { RiHospitalLine } from 'react-icons/ri';
import { BsShieldLock } from 'react-icons/bs';
import { FaHandHoldingWater } from 'react-icons/fa';

const Highlighting = () => {
    return (
        <div className='lg:w-3/4 w-11/12 mx-auto pt-20'>
            <div className='flex gap-10 text-white'>
                <div className='bg-[#f04d4d] p-10 rounded-lg'>
                    <RiHospitalLine className='text-7xl pb-1' />
                    <h3 className='text-2xl font-semibold pb-5'>Blood Bank</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis aut quis beatae consectetur laudantium nihil voluptate perspiciatis quidem minima dolor.</p>
                </div>
                <div className='bg-[#f04d4d] p-10 rounded-lg'>
                    <BsShieldLock className='text-7xl pb-1' />
                    <h3 className='text-2xl font-semibold pb-5'>Secured Data</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis aut quis beatae consectetur laudantium nihil voluptate perspiciatis quidem minima dolor.</p>
                </div>
                <div className='bg-[#f04d4d] p-10 rounded-lg'>
                    <FaHandHoldingWater className='text-7xl pb-1' />
                    <h3 className='text-2xl font-semibold pb-5'>Clean & Hygienic</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis aut quis beatae consectetur laudantium nihil voluptate perspiciatis quidem minima dolor.</p>
                </div>
            </div>
        </div>
    );
};

export default Highlighting;