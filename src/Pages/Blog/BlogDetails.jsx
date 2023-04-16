import React from 'react'
import "./Blog.scss";

function BlogDetails({ blogData, setBlogSwitch }) {
    console.log(blogData, "bj");
    const { id, details, details2, image } = blogData;
    return (
        <div className='main2' >
            <img src={image} alt="" />
            <div className="main2content">
            <h1> {details}</h1>
            <p>{details2}</p>
            <button className='blogbtn' onClick={() => setBlogSwitch(false)}>go back</button>
            </div>
            
        </div>
    )
}

export default BlogDetails