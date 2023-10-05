import React from 'react';
import Donation from '../../../../public/donation.json';
import Lottie from 'lottie-react';

const DonateUs = () => {
    return (
        <div className='lg:w-3/4 w-11/12 mx-auto pt-10'>
            <div className='grid grid-cols-3'>
                <div>
                    <Lottie animationData={Donation} />
                </div>
                <div className='col-span-2 pt-14'>
                    <h3 className='text-[#f04d4d] text-3xl font-semibold pb-5'>Donate Us</h3>
                    <p className='text-justify'>At our organization, we are dedicated to making a positive impact through a range of social activities, including volunteering at homeless shelters, participating in environmental cleanups, fundraising for charitable causes, supporting animal rescue efforts, providing care to the elderly, promoting literacy, and reaching out to the homeless community. While all our members are volunteers, and our work is non-profit, many of these important activities require financial support to continue effectively. Any help, whether through donations or other means, is greatly appreciated and goes a long way in helping us make a difference in our community.</p>
                </div>
            </div>
        </div>
    );
};

export default DonateUs;