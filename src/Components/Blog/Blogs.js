import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import Button from "@material-ui/core/Button";
// import { useDispatch, useSelector } from "react-redux";
// import { selectUserInput, setBlogData } from "../features/userSlice";
import "./Blogs.css";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Blogs = (props) => {
  let query = useQuery();
  //   const searchInput = useSelector(selectUserInput);

  //   const dispatch = useDispatch();
  const [blogs, setBlogs] = useState();
  const [blogData, setBlogData] = useState();
  const [loading, setLoading] = useState(true);
  const [token, settoken] = useState(false);
  const blog_url = `https://apidev.crystaivf.com/api/v1/blog/blogs/`;
  useEffect(() => {
    axios
      .get(blog_url)
      .then((response) => {
        setBlogs(response.data);
        setLoading(false);
        // console.log(response.data);
   console.log(props?.location?.state?.token);

      })
      .catch((error) => {
        console.log(error);
      });
      if(localStorage.getItem("token"))
      {
           settoken(true);
      }
  }, []);
  const handleDelete = (slug) => {
    const token= localStorage.getItem("token");
    // const slug = query.get("slug");
    console.log(slug);
    axios
      .delete("https://apidev.crystaivf.com/api/v1/blog/blog/" + slug + "/",
            {
              headers: {
                "Authorization" : `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
              },
            }
      )
      .then(function(response) {
        const newBlog = blogs.results.filter((item) => item.slug != slug);
        setBlogs("");
        setBlogs(newBlog);
        console.log(newBlog);
        console.log(blogs);
      });
  };
  //   console.log(blogs);

  return (
    <div className="blog__page">
      <h1 className="blog__page__header">Blogs</h1>
      {loading ? <h1 className="loading">Loading...</h1> : ""}
      <div className="blogs">
        {blogs?.results?.map((blog) => (
          <a
            className="blog"
             href={`/singleblog?slug=${blog.slug}`}
          >
            <img src={blog.thumbnail} />
            <div>
              <h3 className="sourceName">
                {/* <span>{blog.source.name}</span> */}
                <p>{blog.updated_at}</p>
              </h3>
              <h1>{blog.title}</h1>
              <p>{blog.summary}</p>
             {token?(
               <div>
              <Link to={`/update-blog?slug=${blog.slug}`}>
                <Button>Update Blog</Button>
              </Link>
              <Link to="/blog">
                <Button onClick={() => handleDelete(blog.slug)}>Delete</Button>
              </Link>
              </div>
             ):null}
            </div>
          </a>
        ))}

        {blogs?.results == 0 && (
          <h1 className="no__blogs">
            No blogs available 😞. Search something else to read blogs on the
            greatest platform.
          </h1>
        )}
      </div>
    </div>
  );
};

export default Blogs;
