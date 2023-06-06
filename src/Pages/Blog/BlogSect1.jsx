import { useState } from "react";
import About from "../../Assets/images/blog3.jpg"
import "./Blog.scss";
import { blogdata } from "./blogdata";
import BlogDetails from "./BlogDetails";
const BlogSect1 = () => {
  const [blogData, setBlogData] = useState()
  const [blogSwitch, setBlogSwitch] = useState(false);

  const blogHandler = (item) => {
    setBlogSwitch(true)
    setBlogData(item)
  }
  return (
    <>
      {
        blogSwitch ? (
          <>
            <BlogDetails setBlogSwitch={setBlogSwitch} blogData={blogData} />
          </>
        ) : (
          <>
            <div className="section">
              <div className="main">
                <img src={About} alt="" />
                <div class="centered">BLOG</div>
              </div>

              <div className="blogwrap">
                <div className="blogsection">
                  <div className="blogsub">
                    {
                      blogdata.map((items) => {
                        return (

                            <div className="bcimage" key={items.id}>
                              <div className="blogcardimg">
                                <img src={items?.image} alt="" />

                                <div className="blogheading">
                                  <h4 className="blogp">{items.details}</h4>
                                </div>
                                

                                <button className="blogbtn" onClick={() => blogHandler(items)}>read more</button>
                              </div>
                          </div>
                        )
                      })
                    }
                  </div>


                </div>
              </div>

            </div>
          </>
        )
      }


    </>
  )
}

export default BlogSect1;