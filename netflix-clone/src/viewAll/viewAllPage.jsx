import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "../components/breadcrumb/breadcrumb";
import { UCard } from "../components/upcomming/uCard";
import { upcome } from "../dummyData";
import "./viewAllPage.css";
const item = 12;
export const ViewAllPage = () => {
  const { title, value } = useParams();

  const [items, setitems] = useState(upcome);
  //   useEffect(() => {
  //     if(value === "upcome"){
  //         console.log(value);
  //         setitems(upcome);
  //       }

  //   }, []);

  const [next, setNext] = useState(item);
  const handleMoreItems = () => {
    setNext(next + item);
  };
  return (
    <>
      <section className="view-all">
        <Breadcrumb active="View All" />
        <div className="title-view">
          <div className="container-view">
            <div className="title">
              <h4>{title}</h4>
            </div>
            <div className="box-view-all">
              {items?.slice(0, next)?.map((item, index) => (
                <UCard key={index} item={item} />
              ))}
            </div>

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
