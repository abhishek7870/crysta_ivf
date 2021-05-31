import React from "react";
import Navbar from "./Navbar";
import Blogs from "./Blogs";
import "./Blog.css";
function Blog() {
  return (
    <div className="blog">
      <Navbar />
      <Blogs />
    </div>
  );
}

export default Blog;
