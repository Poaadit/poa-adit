import React from "react";
import AppLayoutLayer from "../../Components/AppLayoutLayer";
import "./Blog.scss"
import BlogSect1 from "./BlogSect1";



const Blog = () => {
  return (
    <div className="homecont">
      <AppLayoutLayer>
        <BlogSect1/>
      </AppLayoutLayer>
    </div>
  );
};

export default Blog;
