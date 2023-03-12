import React from "react";
import { Link } from "react-router-dom";
import './breadcrumb.css'
export const Breadcrumb = ({active, tag}) => {
  return (
    <>
      <div className="breadcrumb-parent">
        <div className="container">
          <div className="row flex">
            <nav className="breadcrumb">
              <h2 className="title">{active}</h2>
              <ol className="main-breadcrumb">
                <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                {tag}
                <i className="fa fa-angle-right" aria-hidden="true"></i>
                <li className="breadcrumb-item active">{active}</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
