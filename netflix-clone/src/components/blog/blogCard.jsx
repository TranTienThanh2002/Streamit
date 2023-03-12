import React from 'react'
import { Link } from 'react-router-dom'
import './blogCard.css'
export const BlogCard = ({item}) => {
  return (
    <div className="blog-card">
        <div className="blog-img">
            <img src={item.cover} alt="" />
        </div>
        <div className="blog-details">
            <div className="blog-time">
                <div className="time">
                    <div className="date">
                    {item.date}
                    </div>
                </div>
                <div className="tags">
                    <div className="tag">
                    {item.tags}
                    </div>
                </div>
            </div>
            <div className="blog-title">
                <h4>
                    <Link to="">{item.name}</Link>
                </h4>
            </div>
            <div className="blog-desc">
                <p>{item.desc}</p>
            </div>
            <div className="blog-readMore">
                <Link to={`/blog/${item.id}`}>
                    Read More
                </Link>
                <i className="fa fa-chevron-right"></i>
            </div>
        </div>
    </div>
  )
}
