import React from "react";
import AppLayoutLayer from "../../Components/AppLayoutLayer";
import "./Blog.scss"
import BlogSect1 from "./BlogSect1";
import BlogSect2 from "./BlogSect2";


const Blog = () => {
  return (
    <div className="homecont">
      <AppLayoutLayer>
        <BlogSect1/>
        <BlogSect2/>
      </AppLayoutLayer>
    </div>
  );
};

export default Blog;
