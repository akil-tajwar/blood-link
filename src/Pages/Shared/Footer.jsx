import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const isHiding = window.location.pathname === '/login' || window.location.pathname === '/signup';

    if (isHiding) {
        return null;
    }

    return (
        <div className="bg-[#f04d4d] text-white">
            <div className="flex flex-wrap lg:justify-between gap-10 lg:flex-row py-5 w-11/12 lg:w-3/4 mx-auto text-lg">
                <div>
                    <Link href="/"><h3 className="text-3xl font-semibold pb-2">Blood Link</h3></Link>
                    {/* <h3 className="pb-2 font-semibold">Social Links</h3> */}
                    <div className="flex gap-4">
                        <Link href="/">
                            <div className='bg-white text-[#f04d4d] p-2 rounded-lg'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current" >
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                </svg>
                            </div>
                        </Link>
                        <Link href="/">
                            <div className='bg-white text-[#f04d4d] p-2 rounded-lg'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                </svg>
                            </div>
                        </Link>
                        <Link href="/">
                            <div className='bg-white text-[#f04d4d] p-2 rounded-lg'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
                <div>
                    <h3 className="pb-2 font-bold">LEGAL</h3>
                    <div className="flex flex-col">
                        <Link className="link link-hover">Terms and use</Link>
                        <Link className="link link-hover">Privacy and policy</Link>
                        <Link className="link link-hover">Cookie policy</Link>
                    </div>
                </div>
                <div>
                    <h3 className="pb-2 font-bold">EXPLORE</h3>
                    <div className="flex flex-col">
                        <Link className="link link-hover">Features</Link>
                        <Link className="link link-hover">Security</Link>
                        <Link className="link link-hover">Other activities</Link>
                    </div>
                </div>
                <div>
                    <h3 className="pb-2 font-bold">SERVICES</h3>
                    <div className="flex flex-col">
                        <Link className="link link-hover">Branding</Link>
                        <Link className="link link-hover">Design</Link>
                        <Link className="link link-hover">Marketing</Link>
                    </div>
                </div>
            </div>
            <div className="bg-[#f04d4d] text-white text-md py-2">
                <p className="text-center">Copyright © 2023 - All right reserved by Blood Link</p>
            </div>
        </div>
    );
};

export default Footer;