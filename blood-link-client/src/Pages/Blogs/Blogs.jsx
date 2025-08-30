import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [allBlogs, setAllBlogs] = useState([]);
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setAllBlogs(data))
    });
    return (
        <div className='lg:w-3/4 w-11/12 mx-auto pt-32'>
            <h1 className='text-3xl text-center font-semibold'>Blogs</h1>
            <div className='grid grid-cols-3 gap-5 py-12'>
                {allBlogs.map(blog => <div className='border-2 border-red-500 rounded-md p-3' blog={blog} key={blog._id}>
                    <div className='w-full h-[250px] overflow-hidden object-cover rounded-md'>
                        <img src={blog.image} alt="" />
                    </div>
                    <h3 className='text-xl font-semibold'>{blog.title}</h3>
                </div>)}
            </div>
        </div>
    );
};

export default Blogs;