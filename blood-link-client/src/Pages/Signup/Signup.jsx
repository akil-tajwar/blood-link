import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useSignup } from "../../hooks/useSignup";

// const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const Signup = () => {
    const { signup } = useSignup();
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`;

    const onSubmit = async (data) => {
        const { name, email, phone, bloodGroup, password } = data;
        const role = 'user';
        await signup(name, email, phone, bloodGroup, password, role);
    };
    return (
        <div className='lg:pt-40 pt-20'>
            <Link to='/'><h1 className='text-[#f04d4d] text-center text-4xl font-semibold'>Blood Link</h1></Link>
            <div className='mx-auto w-1/5 border-[#f04d4d] border p-8 mt-10 mb-4'>
                <h2 className='text-4xl text-center text-[#f04d4d] font-semibold mb-3'>Signup</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='pb-2'>
                        <label htmlFor="email">Name</label><br />
                        <input className='bg-[#f5f5f5] p-2 border-slate-300 border w-full' type="text" name="name" {...register("name")} required />
                    </div>
                    <div className='pb-2'>
                        <label htmlFor="email">Email</label><br />
                        <input className='bg-[#f5f5f5] p-2 border-slate-300 border w-full' type="email" name="email" {...register("email")} required />
                    </div>
                    <div className='pb-2'>
                        <label htmlFor="email">Phone</label><br />
                        <input className='bg-[#f5f5f5] p-2 border-slate-300 border w-full' type="number" name="phone" {...register("phone")} required />
                    </div>
                    <div className='pb-2'>
                        <label htmlFor="bloodGroup">Blood Group</label><br />
                        <select className='bg-[#f5f5f5] p-2 cursor-pointer border-slate-300 border w-full' name="bloodGroup" {...register("bloodGroup")} required>
                            <option value="">Select your blood group</option>
                            <option value="A+">A+</option>
                            <option value="B+">B+</option>
                            <option value="AB+">AB+</option>
                            <option value="O+">O+</option>
                            <option value="A-">A-</option>
                            <option value="B-">B-</option>
                            <option value="AB-">AB-</option>
                            <option value="O-">O-</option>
                        </select>
                    </div>
                    <div className='pb-2'>
                        <label htmlFor="password">Password</label><br />
                        <input className='bg-[#f5f5f5] p-2 border-slate-300 border w-full' type="password" required />
                    </div>
                    <div className='pb-2'>
                        <label htmlFor="password">Confirm Password</label><br />
                        <input className='bg-[#f5f5f5] p-2 border-slate-300 border w-full' type="password" name="password" {...register("password")} required />
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