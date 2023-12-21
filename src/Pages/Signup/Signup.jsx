import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`;
    const { createUser, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (data, e) => {
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;

        const newUser = {name, email};
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

        const formData = new FormData();
        formData.append('image', data.photoURL[0]); // Assuming photoURL is the input for the image
    
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Image upload failed');
            }
            return res.json();
        })
        .then(imgResponse => {
            // Handle the response from ImgBB here
            console.log('Image uploaded:', imgResponse);
            
            // Once the image is uploaded, proceed with creating the user
            createUser(data.email, data.password, imgResponse.url)
                .then(result => {
                    const loggedUser = result.user;
                    console.log('User created:', loggedUser);
                    logOut();
                    navigate('/login');
                })
                .catch(error => {
                    console.error('Error creating user:', error);
                });
        })
        .catch(error => {
            console.error('Image upload error:', error);
        });
    }
    return (
        <div className='lg:pt-40 pt-20'>
            <Link to='/'><h1 className='text-[#f04d4d] text-center text-4xl font-semibold'>Blood Link</h1></Link>
            <div className='mx-auto w-fit border-[#f04d4d] border p-8 mt-10 mb-4'>
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
                        <label htmlFor="email">Photo</label><br />
                        <input className='bg-[#f5f5f5] p-2 border-slate-300 border w-72' type="file" name="photoURL" {...register("photoURL")} id="" required />
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