import React from 'react'
import './uCard.css'
export const UCard = ({item: {id, cover, name, time}}) => {
  return (
    <>
      <div className="MovieBox">
        <div className="img">
          <img src={cover} alt={name} />
        </div>
        <div className="text">
          <h3>{name}</h3>
          <span>{time}</span> <br />
          <button className="primary-btn">
            <i className="fa fa-play"></i>PLAY NOW
          </button>
        </div>
      </div>
    </>
  )
}