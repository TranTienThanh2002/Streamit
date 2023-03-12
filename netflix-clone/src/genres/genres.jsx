import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "../components/breadcrumb/breadcrumb";
import { MovieGenres } from "../dummyData";
import "./genres.css";
const items = 8;
export const Genres = () => {
  const [next, setNext] = useState(items);

  const [genres, setgenres] = useState(MovieGenres);

  const handleMoreItems = () => {
    setNext(next + items);
  };
  return (
    <>
      <section className="genres">
        <Breadcrumb active="Genres" />
        <div className="movie-genres">
          <div className="container-genres">
            <div className="title-genres">
              <h4 className="title">Movie Genres</h4>
            </div>
            <div className="box-genres">
              {genres.slice(0, next)?.map((item, index) => (
                <div className="box-item" key={index}>
                  <div className="img-box">
                    <img src={item.cover} alt={item.genres} />
                  </div>
                  <div className="box-description">
                    <h6>
                      <Link to={item.genres}>{item.genres}</Link>
                    </h6>
                  </div>
                </div>
              ))}
            </div>
            {next < genres.length && (
              <button className="loadMore" onClick={handleMoreItems}>Load More</button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
