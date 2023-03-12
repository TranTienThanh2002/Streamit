import React, { useState } from "react";
import { BlogCard } from "../components/blog/blogCard";
import { Breadcrumb } from "../components/breadcrumb/breadcrumb";
import { Blog } from "../dummyData";
import "./blogPage.css";
const item = 12;
export const BlogPage = () => {
  const [items, setitems] = useState(Blog);
  const [next, setNext] = useState(item);
  const handleMoreItems = () => {
    setNext(next + item);
  };
  return (
    <>
      <section className="blog">
        <div className="container-blog">
          <div className="breadcrumn-blog">
            <Breadcrumb active="Blog" />
          </div>
          <div className="box-blog">
            {items?.slice(0, next)?.map((item, index) => (
              <div className="blog-item">
                <BlogCard item={item} key={index} />
              </div>
            ))}
          </div>

          <div className="load-more">
            {next < items.length && (
              <button className="loadMore" onClick={handleMoreItems}>
                Load More
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
