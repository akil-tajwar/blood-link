import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Signup = () => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const {createUser, logOut} = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            logOut();
            navigate('/login');
        })
    }
    return (
        <div className='pt-52'>
            <div className='mx-auto w-fit border-[#f04d4d] border p-8 mt-20 mb-4'>
                <h2 className='text-4xl text-center text-[#f04d4d] font-semibold mb-3'>Signup</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='pb-2'>
                        <label htmlFor="email">Name</label><br />
                        <input className='bg-[#f5f5f5] p-2 border-slate-300 border w-72' type="text" name="name" {...register("name")} id="" required />
                    </div>
                    <div className='pb-2'>
                        <label htmlFor="email">Email</label><br />
                        <input className='bg-[#f5f5f5] p-2 border-slate-300 border w-72' type="email" name="email" {...register("email")} id="" required />
                    </div>
                    <div className='pb-2'>
                        <label htmlFor="password">Password</label><br />
                        <input className='bg-[#f5f5f5] p-2 border-slate-300 border w-72' type="password" name="password" {...register("password")} id="" required />
                    </div>
                    <div className='pb-2'>
                        <label htmlFor="email">Photo URL</label><br />
                        <input className='bg-[#f5f5f5] p-2 border-slate-300 border w-72' type="file" name="photo" id="" required />
                    </div>
                    <button className='w-full bg-[#f04d4d] text-white font-semibold p-2 mt-4 mb-3'>Signup</button><br />
                </form>
                <div className='text-center'>
                    <small>Already have an account? <Link to='/login' className='text-[#1d7edd] font-semibold'>Login</Link></small>
                </div>
            </div>
            <p className='text-red-800 text-center font-semibold  mb-20'></p>
        </div>
    );
};

export default Signup;