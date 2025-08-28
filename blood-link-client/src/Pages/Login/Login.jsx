import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLogin } from "../../hooks/useLogin";

const Login = () => {
    const navigate = useNavigate();
    const { login, error } = useLogin();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        if (!email || !password) {
          alert("Please enter both email and password.");
          return;
        }
      
        const response = await login(email, password);
      
        if (!response) {
          console.log("Login failed or API error");
        } else {
          console.log("Login successful:", response);
          navigate('/');
        }
      };      

    return (
        <div className='lg:pt-40 pt-20'>
            <Link to='/'><h1 className='text-[#f04d4d] text-center text-4xl font-semibold'>Blood Link</h1></Link>
            <div className='mx-auto w-1/5 border-[#f04d4d] border p-8 mt-10 mb-4'>
                <h2 className='text-4xl text-center font-semibold mb-3 text-[#f04d4d]'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className='pb-2'>
                        <label htmlFor="email">Email</label><br />
                        <input className='bg-[#f5f5f5] p-2 border-slate-300 border w-full' type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className='pb-2'>
                        <label htmlFor="password">Password</label><br />
                        <input className='bg-[#f5f5f5] p-2 border-slate-300 border w-full' type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
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