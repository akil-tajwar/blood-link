import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [allBlogs, setAllBlogs] = useState([]);
    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setAllBlogs(data))
    });
    return (
        <div>
            {allBlogs.map(blog => <div blog={blog} key={blog._id}>
                <h1>{blog.title}</h1>
            </div>)}
        </div>
    );
};

export default Blogs;