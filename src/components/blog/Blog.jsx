import React from "react";
import "./blog.css";
import { BlogData } from "../data/Data";

const Blog = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">{BlogData.title}</h2>

      <div className="blog__container grid">
        {BlogData.blogs.map((blog, index) => (
          <div key={index} className="blog__card">
            <div className="blog__thumb">
              <span className="blog__category">{blog.category}</span>

              <a href={blog.url} target="_blank" rel="noreferrer">
                <img src={blog.img} alt="" className="blog__img" />
              </a>
            </div>
            <div className="blog__details">
              <a href={blog.url} target="_blank" rel="noreferrer">
                <h3 className="blog__title">{blog.title}</h3>
              </a>
              <div className="blog__meta">
                <span>{blog.date}</span>
                <span className="blog__dot">.</span>
                <span>{blog.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
