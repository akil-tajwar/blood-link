import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { FiSettings, FiLogOut } from 'react-icons/fi';

const Navbar = () => {
    const isHiding = window.location.pathname === '/login' || window.location.pathname === '/signup';

    if (isHiding) {
        return null;
    }

    const menu = (
        <ul className='flex lg:flex-row flex-col lg:gap-8 gap-3'>
            <Link to='/'><li>Home</li></Link>
            <Link to='/blogs'><li>Blog</li></Link>
            <Link><li>FAQ</li></Link>
        </ul>
    )
    return (
        <div className='fixed w-full z-10'>
            <div className='backdrop-blur-sm w-11/12 lg:w-3/4 px-2 mx-auto rounded-lg mt-5'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <div className="dropdown lg:hidden">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] py-3 px-5 shadow menu menu-sm dropdown-content text-black bg-base-100 rounded-box w-52">
                                {menu}
                            </ul>
                        </div>
                        <p className="text-2xl font-semibold">BLood Link</p>
                    </div>
                    <div className="hidden lg:block">{menu}</div>
                    <div className='flex gap-5 items-center'>
                        <div className="">
                            <input type="text" placeholder="Search" className="w-24 border px-2 py-1 rounded-lg md:w-auto" />
                        </div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52" >
                                <li>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <CgProfile className="text-lg" />
                                            <Link to="/profile" className="justify-between">
                                                Profile
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <FiSettings className="text-lg" />
                                            <Link href="/settings" className="justify-between">
                                                Settings
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <FiLogOut className="text-lg" />
                                            <p>Logout</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;