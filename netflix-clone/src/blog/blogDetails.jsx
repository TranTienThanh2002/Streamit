import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Breadcrumb } from "../components/breadcrumb/breadcrumb";
import { Blog } from "../dummyData";
import "./blogDetails.css";
export const BlogDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  useEffect(() => {
    let item = Blog.find((item) => item.id === parseInt(id));
    if (item) {
      setItem(item);
    }
  }, [id]);
  return (
    <section className="blog-details">
      <div className="container-blog-details">
        <div className="breadcrumb">
          <Breadcrumb
            active={item?.name}
            tag={
              <>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
                <li className="breadcrumb-item active">
                  <Link to="/"> {item?.tags}</Link>
                </li>
              </>
            }
          />
        </div>
        <div className="box-blog-details">
          <div className="blog-details">
            <div className="content-blog-details">
              <article>
                <div className="box-img">
                  <img src={item?.cover} alt="" />
                </div>
                <div className="box-details">
                  <div className="box-date-time">
                    <div className="date">
                      <i className="fa fa-calendar-alt"></i>
                      {item?.date}
                      </div>
                  </div>
                  <div className="box-desc">{item?.desc}</div>
                </div>
              </article>
              <div className="comment">
                <div className="box-comment">
                  <div className="title">
                    <h3>Leave a Reply</h3>
                  </div>
                  <form action="" className="form-comment">
                    <p>
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    <div className="comment-form-comment">
                      <textarea
                        name="comment"
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Comment"
                      ></textarea>
                    </div>
                    <div className="form-detail">
                      <div className="comment-form-author">
                        <input
                          type="text"
                          placeholder="Name*"
                          required="required"
                        />
                      </div>
                      <div className="comment-form-author">
                        <input
                          type="email"
                          placeholder="Email*"
                          required="required"
                        />
                      </div>
                      <div className="comment-form-author">
                        <input type="text" placeholder="Website" />
                      </div>
                    </div>
                    <div className="form-submit">
                      <button className="btn-submit">
                        <span>POST COMMENT</span>
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
