import React, { useState } from 'react'
import { homeData } from '../../dummyData';
import { Home } from './home';
import './homes.css'
export const Homes = () => {
    const [item, setitem] = useState(homeData);

  return (
    <>
        <section className="home">
            <Home items={item}/>
        </section>
        <div className="margin"></div>
    </>
  )
}
