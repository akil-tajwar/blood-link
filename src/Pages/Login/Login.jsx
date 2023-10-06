import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
    }
    return (
        <div className='pt-52'>
            <div className='mx-auto w-fit border-[#f04d4d] border p-8 mt-20 mb-4'>
                <h2 className='text-4xl text-center font-semibold mb-3 text-[#f04d4d]'>Login</h2>
                <form>
                    <div className='pb-2'>
                        <label htmlFor="email">Email</label><br />
                        <input className='bg-[#f5f5f5] p-2 border-slate-300 border w-72' type="email" name="email" id="" required />
                    </div>
                    <div className='pb-2'>
                        <label htmlFor="password">Password</label><br />
                        <input className='bg-[#f5f5f5] p-2 border-slate-300 border w-72' type="password" name="password" id="" required />
                    </div>
                    <button className='w-full bg-[#f04d4d] text-white font-semibold p-2 mt-4 mb-3'>Login</button><br />
                </form>
                <p className='text-center'>--------- or ---------</p>
                <div className='flex gap-2 mb-3'>
                    <button className='w-full bg-[#f04d4d] text-white font-semibold p-2 mt-3'>Google</button>
                </div>
                <div className='text-center'>
                    <small>New to Turbo Toy Car? <Link to='/signup' className='text-[#1d7edd] font-semibold'>Create new account</Link></small>
                </div>
            </div>
            <p className='text-red-800 text-center font-semibold mb-20'></p>
        </div>
    );
};

export default Login;